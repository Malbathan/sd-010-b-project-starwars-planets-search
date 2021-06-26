import React from 'react';
import Table from './components/Table';
import TableProv from './provider/TableProv';
import './App.css';

function App() {
  return (
    <TableProv>
      <Table />
    </TableProv>

  );
}

export default App;
