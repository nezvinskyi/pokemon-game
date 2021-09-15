/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Btn, Layout, PokemonCard } from '../../components';
import POKEMONS from '../../data.json';

import css from './GamePage.module.css';

const GamePage = () => {
	const [pokemons, setPokemons] = useState(POKEMONS);
	const history = useHistory();

	const handleCardClick = (id) => {
		setPokemons((prevState) =>
			[...prevState].map((item) => {
				if (item.id === id) {
					item.isActive = !item.isActive;
				}
				return item;
			}),
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
					{pokemons.map(({ id, name, type, values, img, isActive }) => (
						<PokemonCard
							key={id}
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
