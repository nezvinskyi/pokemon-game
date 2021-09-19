/* eslint-disable no-shadow */
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

import { About, Contact, GamePage, HomePage, NotFound } from './routes';
import { Footer, MenuHeader } from './components';

// import database from './service/firebase';

import css from './App.module.css';

// database.ref('pokemons').once('value', (snapshot) => {
// 	console.log('snapshot.val() :>> ', snapshot.val());
// });

const App = () => {
	const match = useRouteMatch('/');
	return (
		<Switch>
			<Route path="/404" component={NotFound} />
			<Route>
				<>
					<MenuHeader bgActive={!match.isExact} />
					<div className={cn(css.wrap, { [css.isHomePage]: match.isExact })}>
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route path="/home" component={HomePage} />
							<Route path="/game" component={GamePage} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route render={() => <Redirect to="/404" />} />
						</Switch>
					</div>
					<Footer />
				</>
			</Route>
		</Switch>
	);
};
export default App;
