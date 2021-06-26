import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import NameFilter from './components/NameFilter';
import NumberFilter from './components/NumberFilter';

function App() {
  return (
    <Provider>
      <NameFilter />
      <NumberFilter />
      <Table />
    </Provider>
  );
}

export default App;
