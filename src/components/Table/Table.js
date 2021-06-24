import React, { useContext } from 'react';
import TableContext from '../../context/TableContext';
import Loading from '../Loading/Loading';
import CreateListTable from './CreateListTable';

function Table() {
  const { data } = useContext(TableContext);

  if (data) {
    return (
      <table>
        <CreateListTable planets={ data } />
      </table>
    );
  }
  return <Loading />;
}

export default Table;
