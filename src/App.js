import React from 'react';
import './App.css';
import Table from './components/Table';
import FiltrosNuméricos from './components/FiltrosNuméricos';
import Provider from './components/Provider';

function App() {
  return (
    <div>
      <Provider>
        <FiltrosNuméricos />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
