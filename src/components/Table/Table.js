import React, { useContext } from 'react';
import TableContext from '../../context/TableContext';
import CreateListTable from './CreateListTable';

function Table() {
  const { data, namePlanet } = useContext(TableContext);

  return (
    <table>
      <CreateListTable planets={ data } namePlanet={ namePlanet } />
    </table>
  );
}

export default Table;
