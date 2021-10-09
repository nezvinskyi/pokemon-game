import { useState } from 'react';
import cn from 'classnames';
import { PokemonCard } from '..';
import css from './PlayerBoard.module.css';

const PlayerBoard = ({ player, cards, onClickCard }) => {
	const [isSelected, setSelected] = useState(null);
	return (
		<>
			{cards.map((card) => {
				const { name, id, type, values, img, active } = card;
				return (
					<div
						key={id}
						className={cn(css.cardBoard, { [css.active]: active || isSelected === id })}
						onClick={() => {
							setSelected(id);
							onClickCard &&
								onClickCard({
									player,
									...card,
								});
						}}
					>
						<PokemonCard
							name={name}
							id={img}
							type={type}
							values={values}
							img={img}
							minimize
							front
						/>
					</div>
				);
			})}
		</>
	);
};

export default PlayerBoard;
