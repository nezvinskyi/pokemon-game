import { useState } from 'react';
import LoginForm from '../LoginForm';
import Modal from '../Modal';
import Menu from './Menu';
import NavBar from './NavBar';

const MenuHeader = ({ bgActive }) => {
	const [isMenuOpen, setMenuOpen] = useState(null);

	const [isOpenModal, setOpenModal] = useState(true);

	const handleClickMenu = () => {
		setMenuOpen((prevState) => !prevState);
	};

	const handleClickLogin = () => {
		setOpenModal((prevState) => !prevState);
	};

	const handleSubmitLoginForm = async ({ email, password }) => {
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
		console.log('response :>> ', response);
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

			<Modal isOpen={isOpenModal} title="Login in..." onCloseModal={handleClickLogin}>
				<LoginForm onSubmit={handleSubmitLoginForm} />
			</Modal>
		</>
	);
};

export default MenuHeader;
