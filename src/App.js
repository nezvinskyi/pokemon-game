import React from 'react';

import { Header, Layout, Footer, PokemonCard } from './components/';

import POKEMONS from './data.json';
import './App.css';
import bgImg1 from './assets/images/bg1.jpg';
import bgImg3 from './assets/images/bg3.jpg';

function App() {
  return (
    <>
      <Header title="This is title" descr="This is Description!" />
      <Layout title="This is title" urlBg={bgImg1}>
        <p>
          In the game two players face off against one another, one side playing as "blue", the
          other as "red" on a 3x3 grid.
        </p>
        <p>
          Each player has five cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
      </Layout>
      <Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
        <div className="flex">
          {POKEMONS.map(item => (
            <PokemonCard key={item.id} {...item} />
          ))}
        </div>
      </Layout>
      <Layout title="This is title" urlBg={bgImg3}>
        <p>
          To win, a majority of the total ten cards played (including the one card that is not
          placed on the board) must be of the player's card color. To do this, the player must
          capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of
          the sides where the two cards touch will be compared. If the rank of the opponent's card
          is higher than the player's card, the player's card will be captured and turned into the
          opponent's color. If the player's rank is higher, the opponent's card will be captured and
          changed into the player's color instead.
        </p>
      </Layout>
      <Footer />
    </>
  );
}

export default App;

//  {POKEMONS.map(({ name, id, type, values, img }) => (
//     <PokemonCard key={id} name={name} id={id} type={type} values={values} img={img} />
