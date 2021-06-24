import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function TablePlanets() {
  const { planets } = useContext(TableContext);

  return (
    <ul>
      {planets.map(({ name, index }) => <li key={ index }>{name}</li>)}
    </ul>
  );
}

export default TablePlanets;
