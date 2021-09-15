import cn from 'classnames';
import css from './NavBar.module.css';

const NavBar = ({ isMenuOpen, onClickMenu, bgActive = false }) => (
	<nav id={css.navbar} className={cn({ [css.bgActive]: bgActive })}>
		<div className={css.navWrapper}>
			<p className={css.brand}>LOGO</p>
			<div onClick={onClickMenu} className={cn(css.menuButton, { [css.active]: isMenuOpen })}>
				<span />
			</div>
		</div>
	</nav>
);

export default NavBar;
