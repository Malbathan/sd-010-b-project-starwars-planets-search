import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './hooks/StarWarsProvider';
import FilterName from './components/FilterName';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <FilterName />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
