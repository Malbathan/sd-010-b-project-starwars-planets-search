import React, { useContext } from 'react';
import TableContext from '../context/contexto';
import TableLine from './TableLine';
import Filters from './Filters';

function Table() {
  const { planetsFilter } = useContext(TableContext);
  let tags = [];

  if (planetsFilter.length !== 0) {
    tags = Object.keys(planetsFilter[0]);
  }
  return (
    <div>
      <Filters />
      <table>
        <tr>
          {tags.map((tag, i) => <th key={ i }>{tag}</th>)}
        </tr>
        {planetsFilter.map((planet, i) => (<TableLine
          i={ i }
          key={ i }
          planet={ planet }
        />))}

      </table>
    </div>
  );
}

export default Table;
