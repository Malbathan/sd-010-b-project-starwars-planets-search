import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Filters() {
  const { delFilter, filters: { filterByNumericValues } } = useContext(PlanetsContext);
  return (
    filterByNumericValues.map(({ column, comparison, value }, index) => (
      <span key={ index } data-testid="filter">
        {` ${column} ${comparison} ${value} `}
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
