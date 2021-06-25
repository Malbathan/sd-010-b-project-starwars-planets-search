import React, { useContext } from 'react';

import Thead from './Thead';

import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  return (
    <table>
      <Thead data={ data } />
    </table>
  );
}

export default Table;
