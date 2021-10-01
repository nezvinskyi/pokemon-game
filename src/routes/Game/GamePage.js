import { useSelector } from 'react-redux';
import { Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { BoardPage, FinishPage, StartPage } from './routes';
import { selectPlayer1Pokemons, selectPlayer2Pokemons } from '../../redux/pokemons';
import { PrivateRoute } from '../../components';

const GamePage = () => {
	const match = useRouteMatch();
	const player1Pokemons = useSelector(selectPlayer1Pokemons);
	const player2Pokemons = useSelector(selectPlayer2Pokemons);

	const gameOver = player1Pokemons.length + player2Pokemons.length === 9;

	return (
		<Switch>
			<PrivateRoute path={`${match.path}/`} exact component={StartPage} />
			<PrivateRoute path={`${match.path}/board`} component={BoardPage} />
			<PrivateRoute
				path={`${match.path}/finish`}
				render={() => (gameOver ? <FinishPage /> : <Redirect to={`${match.path}/`} />)}
			/>
		</Switch>
	);
};

export default GamePage;
