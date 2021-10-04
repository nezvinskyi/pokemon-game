import { createSelector, createSlice } from '@reduxjs/toolkit';
// import FirebaseClass from '../service/firebase';
import { selectLocalId } from './user';

export const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState: {
		isLoading: false,
		data: {},
		error: null,
		selected: [],
		player1Pokemons: [],
		player2Pokemons: [],
	},
	reducers: {
		fetchPokemons: (state) => ({
			...state,
			isLoading: true,
		}),
		fetchPokemonsResolve: (state, action) => ({
			...state,
			isLoading: false,
			data: action.payload,
		}),
		fetchPokemonsReject: (state, action) => ({
			...state,
			isLoading: false,
			data: {},
			error: action.payload,
		}),

		selectPokemon: (state, { payload }) => ({
			...state,
			data: {
				...state.data,
				[payload]: { ...state.data[payload], selected: !state.data[payload].selected },
			},
		}),

		setPlayer1Pokemons: (state, { payload }) => ({
			...state,
			player1Pokemons: payload,
		}),

		setPlayer2Pokemons: (state, { payload }) => ({
			...state,
			player2Pokemons: payload,
		}),
	},
});

export const {
	fetchPokemons,
	fetchPokemonsReject,
	fetchPokemonsResolve,
	selectPokemon,
	setPlayer1Pokemons,
	setPlayer2Pokemons,
} = pokemonsSlice.actions;

export const selectPokemonsLoading = (state) => state.pokemons.isLoading;

export const selectPokemonsData = (state) => state.pokemons.data;

export const selectSelectedPokemons = createSelector([selectPokemonsData], (pokemons) =>
	Object.values(pokemons).filter((item) => item.selected),
);

export const selectPlayer1Pokemons = (state) => state.pokemons.player1Pokemons;

export const selectPlayer2Pokemons = (state) => state.pokemons.player2Pokemons;

export const getPokemonsAsync = () => async (dispatch, getState) => {
	try {
		const localId = selectLocalId(getState());
		dispatch(fetchPokemons());

		const data = await fetch(
			`https://pokemon-game-46d0b-default-rtdb.europe-west1.firebasedatabase.app/${localId}/pokemons.json`,
		).then((res) => res.json());
		dispatch(fetchPokemonsResolve(data));
	} catch (error) {
		dispatch(fetchPokemonsReject(error));
	}
};

export default pokemonsSlice.reducer;
