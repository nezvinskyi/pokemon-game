import { useState } from 'react';
import Menu from './Menu';
import NavBar from './NavBar';

const MenuHeader = ({ bgActive }) => {
	const [isMenuOpen, setMenuOpen] = useState(null);
	const handleClickMenu = () => {
		setMenuOpen((prevState) => !prevState);
	};
	return (
		<>
			<Menu isMenuOpen={isMenuOpen} onClickMenu={handleClickMenu} />
			<NavBar isMenuOpen={isMenuOpen} onClickMenu={handleClickMenu} bgActive={bgActive} />
		</>
	);
};

export default MenuHeader;
