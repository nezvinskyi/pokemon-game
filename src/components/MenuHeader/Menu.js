import cn from 'classnames';
import css from './Menu.module.css';

const MENU = [
	{ title: 'HOME', to: '#welcome' },
	{ title: 'GAME', to: '#game' },
	{ title: 'ABOUT', to: '#about' },
	{ title: 'CONTACT', to: '#contact' },
];

const Menu = ({ isMenuOpen }) => (
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
						<a href={to}>{title}</a>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default Menu;
