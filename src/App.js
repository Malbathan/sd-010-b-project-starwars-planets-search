import React from 'react';
import './App.css';
import Table from './Components/Table';
import FilterByName from './Components/FilterByName';
import FilterByValues from './Components/FilterByValues';
import StarWarsProvider from './Context/StarWarsProvider';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <FilterByName />
        <FilterByValues />
        <Table />
      </StarWarsProvider>

    </div>

  );
}

export default App;
