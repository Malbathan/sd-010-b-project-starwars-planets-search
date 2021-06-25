import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <PlanetsProvider>
      <h2>Star Wars Search Planets</h2>
      <Filter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
