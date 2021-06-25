import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import TableStarWars from './components/TableStarWars';

function App() {
  return (
    <StarWarsProvider>
      <span>
        Hello, App!
      </span>
      <TableStarWars />
    </StarWarsProvider>
  );
}

export default App;
