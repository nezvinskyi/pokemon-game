/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Btn, PokemonCard } from '../../../../components';
import { selectLocalId } from '../../../../redux/user';
// import FirebaseClass from '../../../../service/firebase';
import {
	selectPlayer1Pokemons,
	selectPlayer2Pokemons,
	setPlayer1Pokemons,
	setPlayer2Pokemons,
} from '../../../../redux/pokemons';
import css from './Finish.module.css';

const Finish = () => {
	const localId = useSelector(selectLocalId);
	const [rewardCard, setRewardCard] = useState({});
	const history = useHistory();
	const dispatch = useDispatch();
	const player1Pokemons = useSelector(selectPlayer1Pokemons);
	const player2Pokemons = useSelector(selectPlayer2Pokemons);
	const [rewardPokemons, setRewardPokemons] = useState([]);

	useEffect(() => {
		setRewardPokemons(player2Pokemons);
	}, []);

	const isPlayer1Lost = player1Pokemons.length < player2Pokemons.length;

	const handleCardClick = (id) => {
		if (isPlayer1Lost) return;

		const newState = [...rewardPokemons].map((item) => {
			if (item.selected) delete item.selected;

			if (item.id === id) {
				setRewardCard(item);
				return { ...item, selected: true };
			}
			return item;
		});

		setRewardPokemons(newState);
	};

	const clearStore = () => {
		dispatch(setPlayer1Pokemons([]));
		dispatch(setPlayer2Pokemons([]));
	};

	const handleFinishGameClick = async () => {
		const idToken = localStorage.getItem('idToken');
		await fetch(
			`https://pokemon-game-46d0b-default-rtdb.europe-west1.firebasedatabase.app/${localId}/pokemons.json?auth=${idToken}`,
			{
				method: 'POST',
				body: JSON.stringify(rewardCard),
			},
		);
		clearStore();
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
						front
						isSelected={selected}
					/>
				))}
			</div>
			<div className={css.buttonWrap}>
				<Btn
					title={isPlayer1Lost ? 'Finish Game' : 'Select pokemon and hit finish'}
					onClick={handleFinishGameClick}
					disabled={!isPlayer1Lost && Object.keys(rewardCard).length === 0}
				/>
			</div>
			<div className={css.herPokemonsWraper}>
				{rewardPokemons.map(({ id, name, img, type, values, selected }) => (
					<PokemonCard
						className={css.card}
						key={id}
						name={name}
						id={id}
						type={type}
						values={values}
						img={img}
						front
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
