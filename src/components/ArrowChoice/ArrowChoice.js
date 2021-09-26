import cn from 'classnames';
import { useEffect } from 'react';

import css from './ArrowChoice.module.css';

const ArrowChoice = ({ stop = false, side = 0 }) => {
	useEffect(() => {
		setTimeout(() => {});
		return () => {
			let a = true;
			if (stop) a = true;
			console.log('a :>> ', a);
		};
	}, []);
	return (
		<div
			className={cn(css.arrow, {
				[css.rightSide]: side === 2,
				[css.leftSide]: side === 1,
			})}
		/>
	);
};

export default ArrowChoice;
