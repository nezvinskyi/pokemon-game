import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonsContext } from '../../../../context/pokemonsContext';
import { Btn, PokemonCard } from '../../../../components';
import css from './Finish.module.css';

const Finish = () => {
	const { gameResults, setGameResults } = useContext(PokemonsContext);
	const history = useHistory();

	const handleFinishGameClick = () => {
		setGameResults({ myPokemons: [], herPokemons: [] });
		history.replace('/game');
	};

	return (
		<div className="">
			<div className={css.myPokemonsWraper}>
				{gameResults.myPokemons.map((item) => {
					const { id, name, img, type, values } = item.card;
					return (
						<PokemonCard
							className={css.card}
							key={id}
							name={name}
							id={id}
							type={type}
							values={values}
							img={img}
							isActive
						/>
					);
				})}
			</div>
			<div className={css.buttonWrap}>
				<Btn title="Finish Game" onClick={handleFinishGameClick} />
			</div>
			<div className={css.herPokemonsWraper}>
				{gameResults.herPokemons.map((item) => {
					const { id, name, img, type, values } = item.card;
					return (
						item && (
							<PokemonCard
								className={css.card}
								key={id}
								name={name}
								id={id}
								type={type}
								values={values}
								img={img}
								isActive
							/>
						)
					);
				})}
			</div>
		</div>
	);
};

export default Finish;
