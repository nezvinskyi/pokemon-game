/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { Header, Layout, Footer, PokemonCard } from '../../components';

import bgImg1 from '../../assets/images/bg1.jpg';
import bgImg3 from '../../assets/images/bg3.jpg';

import css from './HomePage.module.css';

function HomePage() {
	const [pokemons] = useState({});
	useEffect(() => {
		// database.ref('pokemons').once('value', (snapshot) => {
		// 	setPokemons(snapshot.val());
		// });
	}, []);

	return (
		<>
			<Header title="This is title" descr="This is Description!" />
			<Layout title="This is title" urlBg={bgImg1}>
				<p>
					In the game two players face off against one another, one side playing
					`&qout;`blue`&qout;`, the other `&qout;`red`&qout;` on a 3x3 grid.
				</p>
				<p>
					Each player has five cards in a hand and the aim is to capture the opponent`&apos;`s cards
					by turning them into the player`&apos;`s own color of red or blue.
				</p>
			</Layout>
			<Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
				<div className={css.flex}>
					{Object.entries(pokemons).map(([key, { id, name, type, values, img }]) => (
						<PokemonCard key={key} name={name} id={id} type={type} values={values} img={img} />
					))}
				</div>
			</Layout>
			<Layout title="This is title" urlBg={bgImg3}>
				<p>
					To win, a majority of the total ten cards played (including the one card that is not
					placed on the board) must be of the player`&apos;`s card color. To do this, the player
					must capture cards by placing a adjacent to an opponent`&apos;`s card whereupon the
					`&qout;`ranks`&qout;` of the sides where the two cards touch will be compared. If the rank
					of the opponent`&apos;`s card is higher than the player`&apos;`s card, the player`&apos;`s
					card will be captured and turned into the opponent`&apos;`s color. If the player`&apos;`s
					rank is higher, the opponent`&apos;`s card will be captured and changed into the
					player`&apos;`s color instead.
				</p>
			</Layout>
			<Footer />
		</>
	);
}

export default HomePage;
