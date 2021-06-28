import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TableHeader() {
  const { infoHead } = useContext(StarWarsContext);
  return (
    <thead>
      <tr>
        {infoHead.filter((result) => result !== 'residents').map((info) => (
          <th key={ info }>
            { info }
          </th>
        ))}

      </tr>
    </thead>

  );
}

export default TableHeader;
