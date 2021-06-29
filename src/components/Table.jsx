import React, { useContext, useEffect, useState } from 'react';
// import Filters from './Filters';
import PlanetsContext from '../context/PlanetsContext';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table() {
  const { data } = useContext(PlanetsContext);
  const [renderPlanetList, setRenderPlanetList] = useState(false);

  useEffect(() => {
    setRenderPlanetList(data.length !== 0);
  }, [data]);

  return (
    <div>
      { renderPlanetList && (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      ) }
    </div>
  );
}

export default Table;
