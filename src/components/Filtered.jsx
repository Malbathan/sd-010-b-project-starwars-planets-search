import React, { useContext } from 'react';
import planContext from '../context/planContext';

function Filtered() {
  const { filtered } = useContext(planContext);

  return (
    <div>
      <label htmlFor="fil">
        Pesquisa:
        {' '}
        <input
          type="text"
          id="fil"
          name="filterByName"
          data-testid="name-filter"
          onChange={ (e) => filtered(e.target) }
        />
      </label>
    </div>
  );
}
export default Filtered;
