import React from 'react';
import Table from './Table';
import TableProvider from '../providers/TableProvider';

function Main() {
  return (
    <TableProvider>
      <Table />
    </TableProvider>
  );
}

export default Main;
