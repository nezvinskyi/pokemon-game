/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import Input from '../Input';
import css from './LoginForm.module.css';

const LoginForm = ({ onSubmit, isOpen }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isToggleLogin, setToggleLogin] = useState(false);

	useEffect(() => {
		setEmail('');
		setPassword('');
	}, [isOpen]);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit && onSubmit({ email, password, isToggleLogin });
		setEmail('');
		setPassword('');
	};

	const handleToggleLogin = () => {
		setToggleLogin((prevState) => !prevState);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				value={email}
				name="email"
				label="Email"
				type="email"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>

			<Input
				value={password}
				name="password"
				label="Password"
				type="password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>

			<div className={css.wrapper}>
				<button type="submit">{isToggleLogin ? 'Signin' : 'Signup'}</button>
				<span onClick={handleToggleLogin} className={css.loginRegisterToggle}>
					{isToggleLogin ? 'Register ?' : 'Login ?'}
				</span>
			</div>
		</form>
	);
};

export default LoginForm;
