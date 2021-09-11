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
      <Layout title="This is title" descr="This is Description!" urlBg={bgImg1} />
      <Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
        <div className="flex">
          {POKEMONS.map(item => (
            <PokemonCard {...item} />
          ))}
        </div>
      </Layout>
      <Layout title="This is title" descr="This is Description!" urlBg={bgImg3} />
      <Footer />
    </>
  );
}

export default App;
