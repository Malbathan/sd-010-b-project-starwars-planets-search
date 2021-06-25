import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import NameFilter from './components/NameFilter';

function App() {
  return (
    <Provider>
      <NameFilter />
      <Table />
    </Provider>
  );
}

export default App;
