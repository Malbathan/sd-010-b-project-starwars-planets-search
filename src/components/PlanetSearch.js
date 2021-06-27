import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const PlanetSearch = () => {
  const { filters, setFilters } = useContext(AppContext);
  function filterByName({ target }) {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
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
      <select data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <label htmlFor="number">
        valor:
        <input data-testid="value-filter" type="number" name="number" id="number" />
      </label>
      <button data-testid="button-filter" type="button">Filtrar</button>
    </div>
  );
};

export default PlanetSearch;
