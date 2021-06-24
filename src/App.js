import React from 'react';
import './App.css';
import Table from './components/Table';
import TableProvider from './context/TableProvider';

function App() {
  return (
    <main>
      <TableProvider>
        <Table />
      </TableProvider>
    </main>
  );
}

export default App;
