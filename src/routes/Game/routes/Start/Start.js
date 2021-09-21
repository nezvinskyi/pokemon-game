/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-shadow */
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Btn, Layout, PokemonCard } from '../../../../components';
// import database from '../../service/firebase';
// import newPokemon from '../../../../data.json';
import { FireBaseContext } from '../../../../context/FireBaseContext';
import { PokemonsContext } from '../../../../context/pokemonsContext';
import css from './StartPage.module.css';

const StartPage = () => {
	const firebase = useContext(FireBaseContext);
	const history = useHistory();
	const pokemonsContext = useContext(PokemonsContext);
	const [pokemons, setPokemons] = useState({});
	// console.log('firebase :>> ', firebase);

	// const getPokemons = async () => {
	// 	const response = await firebase.getPokemonsOnce();
	// 	setPokemons(response);
	// };

	useEffect(() => {
		firebase.getPokemonSocket((pokemons) => {
			setPokemons(pokemons);
		});

		return () => firebase.offPokemonSocket();
	}, []);

	const handleCardClick = (key) => {
		const pokemon = { ...pokemons[key] };
		pokemonsContext.onSelectedPokemons(key, pokemon);

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
						disabled={Object.keys(pokemonsContext.pokemons).length < 5}
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
								if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
									handleCardClick(key);
								}
							}}
							isActive={true}
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
