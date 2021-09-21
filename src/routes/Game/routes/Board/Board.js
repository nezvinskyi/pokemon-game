import { useContext } from 'react';
import { PokemonsContext } from '../../../../context/pokemonsContext';
import { PokemonCard } from '../../../../components';
import css from './Board.module.css';

const BoardPage = () => {
	const { pokemons } = useContext(PokemonsContext);

	return (
		<div className={css.root}>
			<div className={css.playerOne}>
				{Object.values(pokemons).map(({ name, id, type, values, img }) => (
					<PokemonCard
						className={css.card}
						key={id}
						name={name}
						id={id}
						type={type}
						values={values}
						img={img}
						minimize
						isActive
					/>
				))}
			</div>
			<div className={css.board}>
				<div className={css.boardPlate}>1</div>
				<div className={css.boardPlate}>2</div>
				<div className={css.boardPlate}>3</div>
				<div className={css.boardPlate}>4</div>
				<div className={css.boardPlate}>5</div>
				<div className={css.boardPlate}>6</div>
				<div className={css.boardPlate}>7</div>
				<div className={css.boardPlate}>8</div>
				<div className={css.boardPlate}>9</div>
			</div>
		</div>
	);
};

export default BoardPage;
