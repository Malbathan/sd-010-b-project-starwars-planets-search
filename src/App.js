import React from 'react';
import TableProvider from './Provider/TableProvider';
import Table from './Component/Table';
import './App.css';

const App = () => (
  <TableProvider>
    <Table />
  </TableProvider>
);

export default App;
