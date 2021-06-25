import './App.css';
import React from 'react';
import DataProvider from './Context/DataProvider';
import Table from './Components/Table';
import Filters from './Components/Filters';

function App() {
  return (
    <DataProvider>
      <Filters />
      <Table />
    </DataProvider>
  );
}

export default App;
