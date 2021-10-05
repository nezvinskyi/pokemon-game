import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Btn } from '../../components';
import { removeUser, selectUser } from '../../redux/user';
import css from './User.module.css';

const User = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleClickButton = () => {
		history.push('/');
	};

	const handleLogout = () => {
		dispatch(removeUser());
		localStorage.removeItem('idToken');
		history.push('/');
	};

	const toLocalTime = (timestamp) => new Date(timestamp).toLocaleString('uk-UA');

	return (
		<>
			<Btn title="Back To Home" onClick={handleClickButton} />
			<div className={css.container}>
				<h1>User Page</h1>
				<p className={css.email}>User e-mail: {user.email}</p>
				<p className={css.time}>Created at: {toLocalTime(Number(user.createdAt))}</p>
				<p className={css.time}>Last login at: {toLocalTime(Number(user.lastLoginAt))}</p>
			</div>
			<Btn title="Log out" onClick={handleLogout} />
		</>
	);
};

export default User;
