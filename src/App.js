import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <h2>Star Wars Search Planets</h2>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
