import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function TableHeader() {
  const { planets } = useContext(PlanetsContext);

  if (planets.length) {
    const tableHeaders = Object.keys(planets[0]);
    return (
      <tr>
        {
          tableHeaders.map((tableHeader) => (
            <th key={ tableHeader }>
              { tableHeader.replace('_', ' ') }
            </th>
          ))

        }
      </tr>
    );
  }

  return null;
}

export default TableHeader;
