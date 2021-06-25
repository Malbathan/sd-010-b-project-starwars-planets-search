import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import Table from './components/Table/Table';

import TableProvider from './provider/TableProvider';

function App() {
  return (
    <TableProvider>
      <Header />
      <Table />
    </TableProvider>
  );
}

export default App;
