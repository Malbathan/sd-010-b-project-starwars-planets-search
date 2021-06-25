import React, { useContext } from 'react';
import TableContext from '../../context/TableContext';
import Loading from '../Loading/Loading';

import CreateListTable from './CreateListTable';

function Table() {
  const { data } = useContext(TableContext);
  if (data.length !== 0) {
    return (
      <table>
        <CreateListTable />
      </table>
    );
  }
  return <Loading />;
}

export default Table;
