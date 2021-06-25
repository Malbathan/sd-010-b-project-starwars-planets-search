import React, { useContext } from 'react';

import Thead from './Thead';
import Tbody from './Tbody';

import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  return (
    <table>
      <Thead data={ data } />
      <Tbody data={ data } />
    </table>
  );
}

export default Table;
