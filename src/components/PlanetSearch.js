import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const PlanetSearch = () => {
  const {
    filters,
    setFilters,
  } = useContext(AppContext);
  const { filterByNumericValues } = filters;

  function filterByName({ target }) {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  }

  function filterByNumericValue({ target }) {
    let newColumn = filterByNumericValues[0].column;
    let newComparison = filterByNumericValues[0].comparison;
    let newValue = filterByNumericValues[0].value;
    switch (target.name) {
    case 'column':
      newColumn = target.value;
      break;
    case 'comparison':
      newComparison = target.value;
      break;
    default:
      newValue = target.value;
    }
    setFilters({
      ...filters,
      filterByNumericValues: [{
        column: newColumn,
        comparison: newComparison,
        value: newValue,
      }],
    });
  }

  return (
    <div>
      <h1>Star wars planets</h1>
      <label htmlFor="search">
        {'search: '}
        <input
          data-testid="name-filter"
          id="search"
          type="text"
          onChange={ filterByName }
        />
      </label>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ filterByNumericValue }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ filterByNumericValue }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <label htmlFor="number">
        valor:
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          id="number"
          min="0"
          onChange={ filterByNumericValue }
        />
      </label>
      <button data-testid="button-filter" type="button">Filtrar</button>
    </div>
  );
};

export default PlanetSearch;
