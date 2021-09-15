/* eslint-disable no-shadow */
import { useState } from 'react';

import { GamePage, HomePage } from './routes';
import './App.css';

const App = () => {
	const [page, setPage] = useState('app');

	const handleChangePage = (page) => {
		setPage(page);
	};
	switch (page) {
		case 'app':
			return <HomePage onChangePage={handleChangePage} />;
		case 'game':
			return <GamePage onChangePage={handleChangePage} />;
		default:
			return <HomePage />;
	}
};

export default App;
