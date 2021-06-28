import React, { useContext } from 'react';
import planetsContext from '../contextAPI/planetsContext';

// requisito feio com base nesse PR: https://github.com/tryber/sd-010-b-project-starwars-planets-search/pull/10
function DeleteFilters() {
  const { delFilter, filter: { filterByNumericValues } } = useContext(planetsContext);
  return (
    filterByNumericValues.map(({ column }, index) => (
      <span key={ index } data-testid="filter">
        <button
          type="button"
          onClick={ () => delFilter(column) }
        >
          X
        </button>
      </span>
    ))
  );
}

export default DeleteFilters;
