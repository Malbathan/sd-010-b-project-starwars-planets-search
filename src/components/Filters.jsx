import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilterByName(data) {
  const { filters } = useContext(PlanetsContext);
  const { filterByName } = filters;
  const { name } = filterByName;
  return data.filter((planet) => planet.name.toLowerCase().includes(name));
}

// Source https://github.com/tryber/sd-010-b-project-starwars-planets-search/tree/daniel-roberto-starwars
export function FilterByNumericValues(data) {
  const { filters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterByNumericValues[0];

  return data.filter((planet) => {
    if (comparison === 'maior que') return Number(planet[column]) > Number(value);
    if (comparison === 'igual a') return Number(planet[column]) === Number(value);
    return Number(planet[column]) < Number(value);
  });
}

export function SelectedNumericFilters() {
  const { filters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  return (
    <section>
      {filterByNumericValues.map((filter, index) => (
        <div key={ index } data-testid="filter">
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <button type="button">X</button>
        </div>
      ))}
    </section>
  );
}
