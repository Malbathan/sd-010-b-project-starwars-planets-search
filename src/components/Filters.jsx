import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SelectedNumericFilters() {
  const { filters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  return (
    <section>
      {filterByNumericValues.map((filter, index) => (
        <div key={ index } data-testid="filter">
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <button type="button" onClick={ () => {} }>X</button>
        </div>
      ))}
    </section>
  );
}
