import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const {
    planets,
    fetching,
    fetchPlanets,
    headersList,
    filterHeaders,
  } = useContext(Context);

  useEffect(
    fetchPlanets, [],
  );

  const table = (
    <table>
      <thead>
        <tr>
          {headersList.map((header, index) => <th key={ index }>{ header }</th>)}
        </tr>
      </thead>
      <tbody />
    </table>
  );

  return (
    <div>
      { fetching ? 'Loading...' : table }
    </div>
  );
}

export default Table;
