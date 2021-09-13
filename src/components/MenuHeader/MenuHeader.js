import { useState } from 'react';
import Menu from './Menu';
import NavBar from './NavBar';

const MenuHeader = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const handleClickMenu = () => {
		setMenuOpen((prevState) => !prevState);
	};
	return (
		<>
			<Menu isMenuOpen={isMenuOpen} />
			<NavBar isMenuOpen={isMenuOpen} onClickMenu={handleClickMenu} />
		</>
	);
};

export default MenuHeader;
