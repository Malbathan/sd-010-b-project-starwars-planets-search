import React from 'react';
import StarwarsProvider from './context/StarwarsProvider';

import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';
import Table from './components/Table';

import './App.css';
import StarWarsLogo from './img/Star_Wars_logo.png';

function App() {
  return (
    <StarwarsProvider>
      <header>
        <img id="logo" src={ StarWarsLogo } alt="StarWars logo" />
      </header>
      <FilterByName />
      <FilterByNumber />
      <Table />
    </StarwarsProvider>
  );
}

export default App;
