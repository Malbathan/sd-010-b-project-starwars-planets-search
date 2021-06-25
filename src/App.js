import React from 'react';
import './App.css';
import Table from './components/Table';
import FiltraNome from './components/FiltraNome';
import Filtros from './components/Filtros';
import SearchProvider from './context/SearchProvider';

function App() {
  return (
    <SearchProvider>
      <FiltraNome />
      <Filtros />
      <Table />
    </SearchProvider>
  );
}

export default App;
