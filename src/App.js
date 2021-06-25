import React from 'react';
import './App.css';
import Table from './Components/Table';
import FilterByName from './Components/FilterByName';
import FilterByValues from './Components/FilterByValues';

function App() {
  return (
    <div>
      <FilterByName />
      <FilterByValues />
      <Table />
    </div>

  );
}

export default App;
