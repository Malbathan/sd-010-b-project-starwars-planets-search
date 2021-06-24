import React, { useEffect , useState} from 'react';
import Table from './Table';
import getplanets from '../services/data';
import TableProvider from '../providers/TableProvider'

 function Main() {
    return (
      <TableProvider>
        <Table />
        </TableProvider>
    )

 }

export default Main;
