import React from 'react';
import './App.css';
import Table from './components/Table';
import ApiData from './ApiData';

function App() {
  return (
    <ApiData>
      <Table />
    </ApiData>
  );
}

export default App;
