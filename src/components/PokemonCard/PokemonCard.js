import { useState } from 'react';
import cn from 'classnames';
import cardBck from '../../assets/images/card-back-side.jpg';

import css from './PokemonCard.module.css';

const PokemonCard = ({ name, id, type, values, img }) => {
	const [isActive, setActive] = useState(false);
	const handleClick = () => {
		setActive(!isActive);
	};
	return (
		<div className={css.root} onClick={handleClick}>
			<div className={cn(css.pokemonCard, { [css.active]: isActive })}>
				<div className={css.cardFront}>
					<div className={cn(css.wrap, css.front)}>
						<div className={cn(css.pokemon, css[type])}>
							<div className={css.values}>
								<div className={cn(css.count, css.top)}>{values.top}</div>
								<div className={cn(css.count, css.right)}>{values.right}</div>
								<div className={cn(css.count, css.bottom)}>{values.bottom}</div>
								<div className={cn(css.count, css.left)}>{values.left}</div>
							</div>
							<div className={css.imgContainer}>
								<img src={img} alt={name} />
							</div>
							<div className={css.info}>
								<span className={css.number}>#{id}</span>
								<h3 className={css.name}>{name}</h3>
								<small className={type}>
									Type: <span>{type}</span>
								</small>
							</div>
						</div>
					</div>
				</div>

				<div className={css.cardBack}>
					<div className={cn(css.wrap, css.back)}>
						<img src={cardBck} alt="Сard Backed" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
