import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function TableHeader() {
  const { data } = useContext(PlanetsContext);
  const createTableHdr = (name) => (<tr>{ name.map((n) => <th key={ n }>{n}</th>) }</tr>);

  return (
    <thead>
      { createTableHdr(Object.keys(data.results[0]).filter((e) => e !== 'residents')) }
    </thead>
  );
}

export default TableHeader;
