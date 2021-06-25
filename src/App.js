import React from 'react';
import './App.css';
import Table from './components/TablePage';
import TableProvider from './provider/tableProvider';

function App() {
  return (
    <TableProvider>
      <Table />
    </TableProvider>
  );
}

export default App;
