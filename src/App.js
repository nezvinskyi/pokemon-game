/* eslint-disable no-shadow */
import { useLocation, Switch, Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

import { About, Contact, GamePage, HomePage, NotFound } from './routes';
import { Footer, MenuHeader } from './components';

import css from './App.module.css';

const App = () => {
	const location = useLocation('/');
	const isPadding = location.pathname === '/' || location.pathname === '/game/board';

	return (
		<Switch>
			<Route path="/404" component={NotFound} />
			<Route>
				<>
					<MenuHeader bgActive={!isPadding} />
					<div className={cn(css.wrap, { [css.isHomePage]: isPadding })}>
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
