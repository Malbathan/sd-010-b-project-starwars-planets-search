import React from 'react';
import Provider from './context/Provider';
import { Filter, Table } from './components';
import './App.css';

function App() {
  return (
    <Provider>
      <span>A long time agora in a galaxy far, far away...</span>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
