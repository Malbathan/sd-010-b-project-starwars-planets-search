import React from 'react';
import { Provider } from './context/StarWarsContext';
import Table from './components/Table';
import Filters from './components/Filters';
import './App.css';
import SelectedFilters from './components/SelectedFilters';

function App() {
  return (
    <Provider>
      <Filters />
      <SelectedFilters />
      <Table />
    </Provider>
  );
}

export default App;
