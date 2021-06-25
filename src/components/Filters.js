import React, { useContext } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

export default function Filters() {
  const { handleFilters, filter } = useContext(StarWarsContext);
  return (
    <label htmlFor="filter">
      <input
        data-testid="name-filter"
        id="filter"
        type="text"
        value={ filter.filters.filterByName.name }
        onChange={ (e) => handleFilters(e) }
      />
    </label>

  );
}
