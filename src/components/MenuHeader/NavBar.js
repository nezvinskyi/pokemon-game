import cn from 'classnames';
import { ReactComponent as LoginSVG } from '../../assets/images/login.svg';
import css from './NavBar.module.css';

const NavBar = ({ isMenuOpen, onClickMenu, bgActive = false, onClickLogin }) => (
	<nav id={css.navbar} className={cn({ [css.bgActive]: bgActive })}>
		<div className={css.navWrapper}>
			<div className={css.brand}>LOGO</div>
			<div className={css.loginAndMenu}>
				<div className={css.loginWrap} onClick={onClickLogin}>
					<LoginSVG />
				</div>
				<div onClick={onClickMenu} className={cn(css.menuButton, { [css.active]: isMenuOpen })}>
					<span />
				</div>
			</div>
		</div>
	</nav>
);

export default NavBar;
