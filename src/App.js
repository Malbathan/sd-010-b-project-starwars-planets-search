import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './component/Table';
import FilterForm from './component/FilterForm';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <header>Starwars Planets</header>
      <FilterForm />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
