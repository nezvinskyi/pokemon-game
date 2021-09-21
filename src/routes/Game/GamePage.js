import { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { BoardPage, FinishPage, StartPage } from './routes';
import { PokemonsContext } from '../../context/pokemonsContext';

const GamePage = () => {
	const [selectedPokemons, setSelectedPokemons] = useState({});
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

	return (
		<PokemonsContext.Provider
			value={{
				pokemons: selectedPokemons,
				onSelectedPokemons: handleSelectedPokemons,
			}}
		>
			<Switch>
				<Route path={`${match.path}/`} exact component={StartPage} />
				<Route path={`${match.path}/board`} component={BoardPage} />
				<Route path={`${match.path}/finish`} component={FinishPage} />
			</Switch>
		</PokemonsContext.Provider>
	);
};

export default GamePage;
