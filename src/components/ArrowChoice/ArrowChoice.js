/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
import cn from 'classnames';
// import { useEffect } from 'react';

import css from './ArrowChoice.module.css';

const ArrowChoice = ({ side = 0 }) => (
	<div
		className={cn(css.arrow, {
			[css.rightSide]: side === 2,
			[css.leftSide]: side === 1,
		})}
	/>
);

export default ArrowChoice;
