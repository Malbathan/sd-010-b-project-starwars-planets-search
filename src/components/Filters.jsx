import React, { useContext } from 'react';
import { Context } from './PlanetsProvider';

function Filters() {
  const { setMultipleFilters } = useContext(Context);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="filterByName"
        id="filterByName"
        onChange={ (e) => setMultipleFilters(e.target) }
      />
    </div>
  );
}

export default Filters;
