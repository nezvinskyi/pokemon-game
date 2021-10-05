import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './pokemons';
import userReducer from './user';

export default configureStore({
	reducer: {
		pokemons: pokemonsReducer,
		user: userReducer,
	},
});
