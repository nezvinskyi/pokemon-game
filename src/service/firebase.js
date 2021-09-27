import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
	apiKey: 'AIzaSyA-VIpjB1QoZK-jh6aRYAJ5kuJQSNfjvVA',
	authDomain: 'pokemon-game-46d0b.firebaseapp.com',
	databaseURL: 'https://pokemon-game-46d0b-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'pokemon-game-46d0b',
	storageBucket: 'pokemon-game-46d0b.appspot.com',
	messagingSenderId: '779640717076',
	appId: '1:779640717076:web:50b3b24043214c98970c01',
};

firebase.initializeApp(firebaseConfig);
class Firebase {
	constructor() {
		this.fire = firebase;
		this.database = this.fire.database();
	}

	getPokemonSocket(cb) {
		this.database.ref('pokemons').on('value', (snapshot) => {
			cb(snapshot.val());
		});
	}

	offPokemonSocket() {
		this.database.ref('pokemons').off();
	}

	async getPokemonsOnce() {
		const response = await this.database
			.ref('pokemons')
			.once('value')
			.then((snapshot) => snapshot.val());
		return response;
	}

	async postPokemon(pokemon) {
		const newKey = this.database.ref().child('pokemons').push().key;
		this.database.ref(`pokemons/${newKey}`).set(pokemon);
	}

	addPokemon(data, cb) {
		const newKey = this.database.ref().child('pokemons').push().key;
		this.database
			.ref(`pokemons/${newKey}`)
			.set(data)
			.then(() => cb());
	}
}

export default Firebase;
