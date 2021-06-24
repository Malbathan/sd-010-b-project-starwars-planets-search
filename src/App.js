import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchProvider from './context/SearchProvider';

function App() {
  return (
    <SearchProvider>
      <Table />
    </SearchProvider>
  );
}

export default App;
