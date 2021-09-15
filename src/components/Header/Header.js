import { Btn } from '..';
import css from './Header.module.css';

const Header = ({ title, descr, onClickButton }) => {
	const handleClick = () => {
		onClickButton('game');
	};
	return (
		<header className={css.root}>
			<div className={css.forest} />
			<div className={css.container}>
				{title && <h1>{title}</h1>}
				{descr && <p>{descr}</p>}
				<Btn title="Start Game" handler={handleClick} />
			</div>
		</header>
	);
};

export default Header;
