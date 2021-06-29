import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Search() {
  const { filter, setFilter } = useContext(PlanetsContext);

  const nameFilterChange = ({ target: { value } }) => {
    setFilter((oldState) => ({
      filters: {
        ...oldState.filters,
        filterByName: {
          name: value,
        },
      },
    }));
  };

  const selectorFilterChange = ({ target: { id, value } }) => {
    setFilter((oldState) => ({
      filters: {
        ...oldState.filters,
        filterByNumericValues: [
          {
            ...oldState.filters.filterByNumericValues[0],
            [id]: value,
          },
        ],
      },
    }));
  };

  return (
    <label htmlFor="search">
      Search
      <input
        data-testid="name-filter"
        value={ filter.filters.filterByName.name }
        onChange={ nameFilterChange }
      />
      Selectors:
      <select onChange={ selectorFilterChange } id="column" data-testid="column-filter">
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option>
      </select>
      <select
        onChange={ selectorFilterChange }
        id="comparison"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={ selectorFilterChange }
        id="value"
        data-testid="value-filter"
        type="number"
      />
      <button type="button" data-testid="button-filter">Filter</button>
    </label>
  );
}

export default Search;
