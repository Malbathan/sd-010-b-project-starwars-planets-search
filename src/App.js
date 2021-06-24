import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Planets from './components/Planets';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Filters />
      <Planets />
    </StarWarsProvider>
  );
}

export default App;
