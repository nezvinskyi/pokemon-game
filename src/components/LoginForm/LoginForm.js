/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import Input from '../Input';
import css from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// TODO
	// Подумайте, как сделать так, чтобы при закрытии модального окна ваша форма очищалась и не хранила в себе состояние, которое было введено до этого.

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit && onSubmit({ email, password });
		setEmail('');
		setPassword('');
	};

	return (
		<form className={css.div} onSubmit={handleSubmit}>
			<Input
				value={email}
				name="email"
				label="Email"
				// type="email"
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

			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
