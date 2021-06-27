// https://www.youtube.com/watch?v=nV7Mf77GiOc video de referência para renderizar a tabela.

import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Table from './components/Table';
import FilterByText from './components/FilterByText';

function App() {
  return (
    <StarWarsProvider>
      <FilterByText />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
