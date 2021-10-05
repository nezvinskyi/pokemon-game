/* eslint-disable no-shadow */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Switch, Route, Redirect } from 'react-router-dom';
import cn from 'classnames';
import { NotificationContainer } from 'react-notifications';
import { About, Contact, GamePage, HomePage, NotFound, User } from './routes';
import { Footer, MenuHeader, PrivateRoute } from './components';
import { getUserAsync, selectUserLoading } from './redux/user';

import css from './App.module.css';
import 'react-notifications/lib/notifications.css';

const App = () => {
	const isUserLoading = useSelector(selectUserLoading);
	const dispatch = useDispatch();
	const location = useLocation('/');
	const isPadding = location.pathname === '/' || location.pathname === '/game/board';

	useEffect(() => {
		dispatch(getUserAsync());
	}, []);

	if (isUserLoading) {
		return '...loading';
	}

	return (
		<>
			<Switch>
				<Route path="/404" component={NotFound} />
				<Route>
					<>
						<MenuHeader bgActive={!isPadding} />
						<div className={cn(css.wrap, { [css.isHomePage]: isPadding })}>
							<Switch>
								<Route path="/" exact component={HomePage} />
								<Route path="/home" component={HomePage} />
								<PrivateRoute path="/game" component={GamePage} />
								<PrivateRoute path="/about" component={About} />
								<Route path="/contact" component={Contact} />
								<Route path="/user" component={User} />
								<Route render={() => <Redirect to="/404" />} />
							</Switch>
						</div>
						<Footer />
					</>
				</Route>
			</Switch>
			<NotificationContainer />
		</>
	);
};
export default App;
