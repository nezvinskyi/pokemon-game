/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Btn, Layout, PokemonCard } from '../../components';
// import POKEMONS from '../../data.json';
import database from '../../service/firebase';

import css from './GamePage.module.css';

const GamePage = () => {
	const history = useHistory();
	const [pokemons, setPokemons] = useState({});

	useEffect(() => {
		database.ref('pokemons').once('value', (snapshot) => {
			setPokemons(snapshot.val());
		});
	}, []);

	const handleCardClick = (id) => {
		setPokemons((prevState) =>
			Object.entries(prevState).reduce((acc, item) => {
				const pokemon = { ...item[1] };
				if (pokemon.id === id) {
					pokemon.isActive = !item[1].isActive;
					database.ref(`pokemons/${item[0]}`).set({ ...pokemon });
				}
				acc[item[0]] = pokemon;
				return acc;
			}, {}),
		);
	};

	const handleClickButton = () => {
		history.push('/');
	};

	return (
		<div>
			<h1>This is Game Page</h1>
			<Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
				<div className={css.flex}>
					{Object.entries(pokemons).map(([key, { id, name, type, values, img, isActive }]) => (
						<PokemonCard
							key={key}
							name={name}
							id={id}
							type={type}
							values={values}
							img={img}
							onClick={() => handleCardClick(id)}
							isActive={isActive}
						/>
					))}
				</div>
			</Layout>
			<Btn title="Back To Home" onClick={handleClickButton} />
		</div>
	);
};
export default GamePage;
