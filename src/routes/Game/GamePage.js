import { useState } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { BoardPage, FinishPage, StartPage } from './routes';
import { PokemonsContext } from '../../context/pokemonsContext';

const GamePage = () => {
	const [selectedPokemons, setSelectedPokemons] = useState({});
	const [gameResults, setGameResults] = useState({ myPokemons: [], herPokemons: [] });
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

	// const handleMyPokemons = (pokemons) => {
	// 	setMyPokemons(pokemons);
	// };
	const gameOver = gameResults.myPokemons.length + gameResults.herPokemons.length === 9;

	return (
		<PokemonsContext.Provider
			value={{
				pokemons: selectedPokemons,
				onSelectedPokemons: handleSelectedPokemons,
				gameResults,
				setGameResults,
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
