/* eslint-disable no-prototype-builtins */
import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { useDispatch } from 'react-redux';
import { getUserUpdateAsync } from '../../redux/user';
import LoginForm from '../LoginForm';
import Modal from '../Modal';
import Menu from './Menu';
import NavBar from './NavBar';

const MenuHeader = ({ bgActive }) => {
	const [isMenuOpen, setMenuOpen] = useState(null);
	const [isOpenModal, setOpenModal] = useState(false);
	const dispatch = useDispatch();

	const handleClickMenu = () => {
		setMenuOpen((prevState) => !prevState);
	};

	const handleClickLogin = () => {
		setOpenModal((prevState) => !prevState);
	};

	const signUp = async ({ email, password }) => {
		const { REACT_APP_API } = process.env;
		const requestOptions = {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
				returnSecureToken: true,
			}),
		};
		const response = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${REACT_APP_API}`,
			requestOptions,
		).then((res) => res.json());

		return response;
	};

	const signIn = async ({ email, password }) => {
		const { REACT_APP_API } = process.env;
		const requestOptions = {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
				returnSecureToken: true,
			}),
		};
		const response = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${REACT_APP_API}`,
			requestOptions,
		).then((res) => res.json());

		return response;
	};

	const handleSubmitLoginForm = async ({ email, password, isToggleLogin }) => {
		let response;
		if (isToggleLogin) {
			response = await signIn({ email, password });
		} else {
			response = await signUp({ email, password });
		}

		if (response.hasOwnProperty('error')) {
			NotificationManager.error(response.error.message, 'Error!');
		} else {
			if (!isToggleLogin) {
				const pokemonsStart = await fetch(
					'https://reactmarathon-api.herokuapp.com/api/pokemons/starter',
				).then((res) => res.json());

				pokemonsStart.data.forEach(async (pokemon) => {
					await fetch(
						`https://pokemon-game-46d0b-default-rtdb.europe-west1.firebasedatabase.app/${response.localId}/pokemons.json?auth=${response.idToken}`,
						{
							method: 'POST',
							body: JSON.stringify(pokemon),
						},
					);
				});
			}

			localStorage.setItem('idToken', response.idToken);

			NotificationManager.success(
				`${response.email} successfully ${isToggleLogin ? 'logged in' : 'registered'}`,
				'Success!',
			);
			dispatch(getUserUpdateAsync());
			setTimeout(() => {
				setOpenModal(false);
			}, 2000);
		}
	};

	return (
		<>
			<Menu isMenuOpen={isMenuOpen} onClickMenu={handleClickMenu} />
			<NavBar
				isMenuOpen={isMenuOpen}
				onClickMenu={handleClickMenu}
				onClickLogin={handleClickLogin}
				bgActive={bgActive}
			/>

			<Modal isOpen={isOpenModal} title="Authentification" onCloseModal={handleClickLogin}>
				<LoginForm onSubmit={handleSubmitLoginForm} isOpen={isOpenModal} />
			</Modal>
		</>
	);
};

export default MenuHeader;
