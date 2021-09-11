import React from 'react';

import { Header, Layout, Footer } from './components/';

import './App.css';
import bgImg1 from './assets/images/bg1.jpg';
import bgImg3 from './assets/images/bg3.jpg';

function App() {
  return (
    <>
      <Header title="This is title" descr="This is Description!" />
      <Layout title="This is title" descr="This is Description!" urlBg={bgImg1} />
      <Layout title="This is title" descr="This is Description!" colorBg="#e2e2e2" />
      <Layout title="This is title" descr="This is Description!" urlBg={bgImg3} />
      <Footer />
    </>
  );
}

export default App;
