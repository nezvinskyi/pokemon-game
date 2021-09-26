import { useState } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { BoardPage, FinishPage, StartPage } from './routes';
import { PokemonsContext } from '../../context/pokemonsContext';

const GamePage = () => {
	const [selectedPokemons, setSelectedPokemons] = useState({});
	const [player1Pokemons, setPlayer1Pokemons] = useState([]);
	const [player2Pokemons, setPlayer2Pokemons] = useState([]);
	const match = useRouteMatch();

	const handleSelectedPokemons = (key, pokemon) => {
		setSelectedPokemons((prevState) => {
			if (prevState[key]) {
				const copyState = { ...prevState };
				delete copyState[key];

				return copyState;
			}
			return {
				...prevState,
				[key]: pokemon,
			};
		});
	};

	const clearContext = () => {
		setSelectedPokemons({});
		setPlayer1Pokemons([]);
		setPlayer2Pokemons([]);
	};

	const gameOver = player1Pokemons.length + player2Pokemons.length === 9;

	return (
		<PokemonsContext.Provider
			value={{
				pokemons: selectedPokemons,
				setSelectedPokemons,
				onSelectedPokemons: handleSelectedPokemons,
				player1Pokemons,
				player2Pokemons,
				setPlayer1Pokemons,
				setPlayer2Pokemons,
				clearContext,
			}}
		>
			<Switch>
				<Route path={`${match.path}/`} exact component={StartPage} />
				<Route path={`${match.path}/board`} component={BoardPage} />
				<Route
					path={`${match.path}/finish`}
					render={() => (gameOver ? <FinishPage /> : <Redirect to={`${match.path}/`} />)}
				/>
			</Switch>
		</PokemonsContext.Provider>
	);
};

export default GamePage;
