import React from 'react';
import './App.css';
import PlanetsProvider from './Context/PlanetsProvider';
import Table from './Components/Table';
import Search from './Components/Search';

function App() {
  return (
    <PlanetsProvider>
      <Search />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
