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
    </div>
  );
};

export default PlanetSearch;
