import React from 'react';
import ProviderStarWars from './context/ProviderStarWars';
import Table from './components/Table';
import TableFilter from './components/TableFilter';
import './App.css';

function App() {
  return (
    <ProviderStarWars>
      <TableFilter />
      <Table />
    </ProviderStarWars>
  );
}

export default App;
