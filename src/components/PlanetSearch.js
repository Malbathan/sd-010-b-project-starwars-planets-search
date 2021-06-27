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
    </div>
  );
};

export default PlanetSearch;
