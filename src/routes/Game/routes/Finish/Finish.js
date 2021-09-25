/* eslint-disable no-param-reassign */
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonsContext } from '../../../../context/pokemonsContext';
import { FireBaseContext } from '../../../../context/FireBaseContext';
import { Btn, PokemonCard } from '../../../../components';
import css from './Finish.module.css';

const Finish = () => {
	const {
		player1Pokemons,
		player2Pokemons,
		setPlayer1Pokemons,
		setPlayer2Pokemons,
		setSelectedPokemons,
	} = useContext(PokemonsContext);
	const firebase = useContext(FireBaseContext);
	const [rewardCard, setRewardCard] = useState({});
	const history = useHistory();

	const handleCardClick = (id) => {
		const isPlayer1Lost = player1Pokemons.length < player2Pokemons.length;

		if (isPlayer1Lost) return;

		const newState = [...player2Pokemons].map((item) => {
			delete item.selected;
			delete item.possession;
			if (item.id === id) {
				setRewardCard(item);
				return { ...item, selected: true };
			}
			return item;
		});

		setPlayer2Pokemons(newState);
	};

	const handleFinishGameClick = async () => {
		rewardCard && (await firebase.postPokemon(rewardCard));
		setPlayer1Pokemons([]);
		setPlayer2Pokemons([]);
		setSelectedPokemons({});
		history.replace('/game');
	};

	return (
		<div className="">
			<div className={css.myPokemonsWraper}>
				{player1Pokemons.map(({ id, name, img, type, values, selected }) => (
					<PokemonCard
						className={css.card}
						key={id}
						name={name}
						id={id}
						type={type}
						values={values}
						img={img}
						isActive
						isSelected={selected}
					/>
				))}
			</div>
			<div className={css.buttonWrap}>
				<Btn title="Finish Game" onClick={handleFinishGameClick} />
			</div>
			<div className={css.herPokemonsWraper}>
				{player2Pokemons.map(({ id, name, img, type, values, selected }) => (
					<PokemonCard
						className={css.card}
						key={id}
						name={name}
						id={id}
						type={type}
						values={values}
						img={img}
						isActive
						onClickCard={() => {
							handleCardClick(id);
						}}
						isSelected={selected}
					/>
				))}
			</div>
		</div>
	);
};

export default Finish;
