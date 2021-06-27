import React, { useContext } from 'react';
import TableContext from '../context/contexto';
import TableLine from './TableLine';
import Filters from './Filters';

function Table() {
  const { planets } = useContext(TableContext);
  let tags = [];

  if (planets.length !== 0) {
    tags = Object.keys(planets[0]);
  }
  return (
    <div>
      <Filters />
      <table>
        <tr>
          {tags.map((tag, i) => <th key={ i }>{tag}</th>)}
        </tr>
        {planets.map((planet, i) => <TableLine i={ i } key={ i } planet={ planet } />)}

      </table>
    </div>
  );
}

export default Table;
