import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Btn, Layout, PokemonCard } from '../../components';
import database from '../../service/firebase';
import newPokemon from '../../data.json';

import css from './GamePage.module.css';

const GamePage = () => {
	const history = useHistory();
	const [pokemons, setPokemons] = useState({});

	useEffect(() => {
		database.ref('pokemons').once('value', (snapshot) => {
			setPokemons(snapshot.val());
		});
	}, [pokemons]);

	const handleCardClick = (id) => {
		setPokemons((prevState) =>
			Object.entries(prevState).reduce((acc, item) => {
				const pokemon = { ...item[1] };
				if (item[0] === id) {
					pokemon.isActive = !item[1].isActive;
					database.ref(`pokemons/${item[0]}`).set({ ...pokemon });
				}
				acc[item[0]] = pokemon;
				return acc;
			}, {}),
		);
	};

	const handleAddPokemon = () => {
		const newKey = database.ref().child('pokemons').push().key;
		database.ref(`pokemons/${newKey}`).set(newPokemon);

		setPokemons((prevState) => Object.assign(prevState, { [newKey]: newPokemon }));
	};

	const handleClickButton = () => {
		history.push('/');
	};

	return (
		<div>
			<h1>This is Game Page</h1>
			<Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
				<Btn title="Add pokemon" onClick={handleAddPokemon} />
				<div className={css.flex}>
					{Object.entries(pokemons).map(([key, { id, name, type, values, img, isActive }]) => (
						<PokemonCard
							key={key}
							name={name}
							id={id}
							type={type}
							values={values}
							img={img}
							onClick={() => handleCardClick(key)}
							isActive={isActive}
						/>
					))}
				</div>
				<Btn title="Back To Home" onClick={handleClickButton} />
			</Layout>
		</div>
	);
};
export default GamePage;
