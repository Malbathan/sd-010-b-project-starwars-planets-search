import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './contexts/PlanetsProvider';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <Table />
      </PlanetsProvider>
    </main>
  );
}

export default App;
