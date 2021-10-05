import { useState, useEffect } from 'react';
import css from './Result.module.css';
import YouWin from '../../assets/images/you-win.png';
import YouLose from '../../assets/images/you-lose.png';
import Draw from '../../assets/images/draw.png';

const Result = ({ type, onClick }) => {
	const [url, setUrl] = useState(null);

	useEffect(() => {
		switch (type) {
			case 'win':
				setUrl(YouWin);
				break;
			case 'lose':
				setUrl(YouLose);
				break;
			case 'draw':
				setUrl(Draw);
				break;
			default:
				setUrl(YouWin);
		}
	}, [type]);

	return (
		<div className={css.result} onClick={onClick}>
			<img src={url} alt="result" />
		</div>
	);
};

export default Result;
