import { useHistory } from 'react-router-dom';
import { Btn } from '..';
import css from './Header.module.css';

const Header = ({ title, descr }) => {
	const history = useHistory();
	const handleClick = () => {
		history.push('/game');
	};

	return (
		<header className={css.root}>
			<div className={css.forest} />
			<div className={css.moon} />
			<div className={css.silhouette} />
			<div className={css.container}>
				{title && <h1>{title}</h1>}
				{descr && <p>{descr}</p>}
				<Btn title="Start Game" onClick={handleClick} />
			</div>
		</header>
	);
};

export default Header;
