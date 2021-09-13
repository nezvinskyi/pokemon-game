import cn from 'classnames';
import css from './Menu.module.css';

const Menu = ({ isMenuOpen }) => (
	<div className={cn(css.menuContainer, { [css.active]: isMenuOpen })}>
		<div className={css.overlay} />
		<div className={css.menuItems}>
			<ul>
				<li>
					<a href="#welcome">HOME</a>
				</li>
				<li>
					<a href="#game">GAME</a>
				</li>
				<li>
					<a href="#about">ABOUT</a>
				</li>
				<li>
					<a href="#contact">CONTACT</a>
				</li>
			</ul>
		</div>
	</div>
);

export default Menu;
