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
				<button type="button" onClick={handleClick}>
					Start Game
				</button>
			</div>
		</header>
	);
};

export default Header;
