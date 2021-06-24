import './App.css';
import React from 'react';
import DataProvider from './Context/DataProvider';
import Table from './Components/Table';
import Filters from './Components/Filters';

function App() {
  return (
    <Filters>
      <DataProvider>
        <Table />
      </DataProvider>
    </Filters>
  );
}

export default App;
