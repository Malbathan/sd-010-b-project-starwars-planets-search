import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <main>
        <h1>Planet List</h1>
        <Table />
      </main>
    </PlanetProvider>
  );
}

export default App;
