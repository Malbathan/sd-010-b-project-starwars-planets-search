import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <main>
        <h1>Planet List</h1>
        <Filter />
        <Table />
      </main>
    </PlanetProvider>
  );
}

export default App;
