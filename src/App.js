import './App.css';
import React from 'react';
import DataProvider from './Context/DataProvider';
import Table from './Components/Table';

function App() {
  return (
    <DataProvider>
      <Table />
    </DataProvider>
  );
}

export default App;
