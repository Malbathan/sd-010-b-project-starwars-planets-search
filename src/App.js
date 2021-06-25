import React from 'react';
import './App.css';
import Table from './components/Table';
import TableProvider from './context/TableProvider';

function App() {
  return (
    <>
      <label htmlFor="name-filter">
        Filtrar
        <input type="text" data-testid="name-filter" />
      </label>
      <TableProvider>
        <Table />
      </TableProvider>
    </>
  );
}

export default App;
