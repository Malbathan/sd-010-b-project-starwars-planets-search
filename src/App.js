import React from 'react';
import './App.css';
import Table from './Table';
import Provider from './context/Provider';
import Inputs from './Inputs';

function App() {
  return (
    <Provider>
      <Table />
      <Inputs />
    </Provider>
  );
}

export default App;
