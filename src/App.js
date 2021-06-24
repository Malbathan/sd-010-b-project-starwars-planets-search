import React from 'react';
import './App.css';
import Table from './components/Table';
import FiltraNome from './components/FiltraNome';
import SearchProvider from './context/SearchProvider';

function App() {
  return (
    <SearchProvider>
      <FiltraNome />
      <Table />
    </SearchProvider>
  );
}

export default App;
