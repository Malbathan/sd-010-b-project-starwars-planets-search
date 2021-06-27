import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <SearchBar />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
