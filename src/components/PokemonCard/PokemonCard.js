import cn from 'classnames';

import css from './PokemonCard.module.css';

const PokemonCard = ({
	className,
	name,
	id,
	type,
	values,
	img,
	minimize,
	onClickCard,
	isActive,
	isSelected,
}) => {
	const handleClick = () => {
		onClickCard && onClickCard(id);
	};
	return (
		<div
			className={cn(className, css.pokemonCard, {
				[css.active]: isActive,
				[css.selected]: isSelected,
			})}
			onClick={handleClick}
		>
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
						{!minimize && (
							<div className={css.info}>
								<span className={css.number}>#{id}</span>
								<h3 className={css.name}>{name}</h3>
								<small className={css.type}>
									Type: <span>{type}</span>
								</small>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className={css.cardBack}>
				<div className={cn(css.wrap, css.back)} />
			</div>
		</div>
	);
};

export default PokemonCard;
