/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Btn, Layout, PokemonCard } from '../../../../components';
import {
	getPokemonsAsync,
	selectPokemonsData,
	selectPokemon,
	selectSelectedPokemons,
} from '../../../../redux/pokemons';
import css from './StartPage.module.css';

const StartPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const pokemonsRedux = useSelector(selectPokemonsData);
	const selectedPokemonsRedux = useSelector(selectSelectedPokemons);
	const [pokemons, setPokemons] = useState({});

	useEffect(() => {
		dispatch(getPokemonsAsync());
	}, []);

	useEffect(() => {
		setPokemons(pokemonsRedux);
	}, [pokemonsRedux]);

	const handleCardClick = (key) => {
		dispatch(selectPokemon(key));

		setPokemons((prevState) => ({
			...prevState,
			[key]: {
				...prevState[key],
				selected: !prevState[key].selected,
			},
		}));
	};

	const handleStartGameClick = () => {
		history.push('/game/board');
	};

	const handleGoBackClick = () => {
		history.push('/');
	};

	return (
		<div>
			<h1>This is Game Page</h1>
			<Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
				<div className={css.buttonWrap}>
					<Btn
						title="Start Game"
						onClick={handleStartGameClick}
						disabled={selectedPokemonsRedux.length < 5}
					/>
				</div>
				<div className={css.flex}>
					{Object.entries(pokemons).map(([key, { id, name, type, values, img, selected }]) => (
						<PokemonCard
							className={css.card}
							key={key}
							name={name}
							id={id}
							type={type}
							values={values}
							img={img}
							onClickCard={() => {
								if (selectedPokemonsRedux.length < 5 || selected) {
									handleCardClick(key);
								}
							}}
							front={true}
							isSelected={selected}
						/>
					))}
				</div>
				<div className={css.buttonWrap}>
					<Btn title="Back To Home" onClick={handleGoBackClick} />
				</div>
			</Layout>
		</div>
	);
};

export default StartPage;
