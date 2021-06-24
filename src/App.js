import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Filter from './components/Filter';
import Table from './components/Table';
import Sort from './components/Sort';

function App() {
  return (
    <Provider>
      <Filter />
      <Sort />
      <Table />
    </Provider>
  );
}

export default App;
