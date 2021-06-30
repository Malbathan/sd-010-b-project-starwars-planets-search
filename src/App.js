import React from 'react';
import Table from './components/Table';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import Forms from './components/Forms';

function App() {
  return (
    <PlanetProvider>
      <Forms />
      <Table />
    </PlanetProvider>
  );
}

export default App;
