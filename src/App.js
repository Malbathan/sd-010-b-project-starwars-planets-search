import React from 'react';
import './App.css';
import ProviderPlanets from './context/ProviderPlanets';
import Table from './components/Table';

function App() {
  return (
    <ProviderPlanets>
      <Table />
    </ProviderPlanets>
  );
}

export default App;
