import cn from 'classnames';
import { Link } from 'react-router-dom';
import css from './Menu.module.css';

const MENU = [
	{ title: 'HOME', to: '/' },
	{ title: 'GAME', to: '/game' },
	{ title: 'ABOUT', to: '/about' },
	{ title: 'CONTACT', to: '/contact' },
];

const Menu = ({ isMenuOpen, onClickMenu }) => (
	<div
		className={cn(css.menuContainer, {
			[css.active]: isMenuOpen === true,
			[css.deactive]: isMenuOpen === false,
		})}
	>
		<div className={css.overlay} />
		<div className={css.menuItems}>
			<ul>
				{MENU.map(({ title, to }) => (
					<li key={title}>
						<Link to={to} onClick={onClickMenu}>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default Menu;
