import React from 'react';
import './App.css';
import Table from './components/Table';
import TableProvider from './context/TableProvider';

function App() {
  return (
    <TableProvider>
      <div>
        <Table />
      </div>
    </TableProvider>
  );
}

export default App;
