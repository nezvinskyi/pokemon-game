import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as LoginSVG } from '../../assets/images/login.svg';
import { ReactComponent as UserSVG } from '../../assets/images/user.svg';
import { selectLocalId, selectUserLoading } from '../../redux/user';

import css from './NavBar.module.css';

const NavBar = ({ isMenuOpen, onClickMenu, bgActive = false, onClickLogin }) => {
	const isLoadingUser = useSelector(selectUserLoading);
	const localId = useSelector(selectLocalId);

	return (
		<nav id={css.navbar} className={cn({ [css.bgActive]: bgActive })}>
			<div className={css.navWrapper}>
				<Link to="/" className={css.brand}>
					LOGO
				</Link>

				<div className={css.loginAndMenu}>
					{!isLoadingUser && !localId && (
						<div className={css.loginWrap} onClick={onClickLogin}>
							<LoginSVG />
						</div>
					)}

					{!isLoadingUser && localId && (
						<Link className={css.loginWrap} to="/user">
							<UserSVG />
						</Link>
					)}
					<div onClick={onClickMenu} className={cn(css.menuButton, { [css.active]: isMenuOpen })}>
						<span />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
