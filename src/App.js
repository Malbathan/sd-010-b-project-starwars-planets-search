import React from 'react';
import './App.css';
import Filtro from './components/Filtro';
import Table from './components/Table';
import StartWarsProvider from './context/startWarsProvider';

function App() {
  return (
    <StartWarsProvider>
      <Filtro />
      <Table />
    </StartWarsProvider>
  );
}

export default App;
