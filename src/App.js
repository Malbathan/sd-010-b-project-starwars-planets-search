import React from 'react';
import './App.css';
import Table from './Components/Table';
import Provider from './Context/Provider';
import SetFilter from './Components/SetFilter';
import FilterByColumn from './Components/FilterByColumn';

function App() {
  return (
    <Provider>
      <SetFilter />
      <FilterByColumn />
      <Table />
    </Provider>
  );
}

export default App;
