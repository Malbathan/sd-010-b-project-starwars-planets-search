import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './hooks/StarWarsProvider';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <form>
          <FilterName />
          <FilterNumber />
        </form>
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
