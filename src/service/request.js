class Request {
	constructor() {
		this.host = 'https://reactmarathon-api.herokuapp.com/api';
	}

	async getStarterKit() {
		const result = await fetch(`${this.host}/pokemons/starter`).then((res) => res.json());
		return result;
	}

	async getBoard() {
		const result = await fetch(`${this.host}/pokemons/board`).then((res) => res.json());
		return result;
	}

	async gameStart(data) {
		const result = await fetch(`${this.host}/pokemons/game/start`, {
			method: 'POST',
			body: JSON.stringify(data),
		}).then((res) => res.json());
		return result;
	}

	async game(data) {
		const result = await fetch(`${this.host}/pokemons/game`, {
			method: 'POST',
			body: JSON.stringify(data),
		}).then((res) => res.json());
		return result;
	}
}

const request = new Request();

export default request;
