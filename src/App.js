import { useState } from 'react';

import { GamePage, HomePage } from './routes';
import './App.css';

const App = () => {
  const [page] = useState('app');
  switch (page) {
    case 'app':
      return <HomePage />;
    case 'game':
      return <GamePage />;
    default:
      return <HomePage />;
  }
};

export default App;
