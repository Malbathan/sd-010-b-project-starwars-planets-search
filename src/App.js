import React from 'react';

import PlanetsProvider from './context/PlanetsProvider';

import Table from './components/Table/Table';
import Filters from './components/Filters/Filters';

import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
