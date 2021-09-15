import cn from 'classnames';
import css from './NavBar.module.css';

const NavBar = ({ isMenuOpen, onClickMenu }) => {
	const handleClick = () => {
		onClickMenu && onClickMenu();
	};

	return (
		<nav className={css.root}>
			<div className={css.navWrapper}>
				<p className={css.brand}>LOGO</p>
				<a
					href="#s"
					onClick={handleClick}
					className={cn(css.menuButton, { [css.active]: isMenuOpen })}
				>
					<span />
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
