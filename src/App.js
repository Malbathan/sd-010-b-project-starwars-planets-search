import React from 'react';
import { Provider } from './context/StarWarsContext';
import Table from './components/Table';
import Filters from './components/Filters';
import './App.css';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
