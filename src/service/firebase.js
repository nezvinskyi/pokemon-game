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

export const fire = firebase;
export const database = fire.database();

export default database;
