import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const { filters, setFilters } = useContext(StarWarsContext);

  function handleChange(e) {
    setFilters({ ...filters, filterByName: { name: e.target.value } });
  }

  return (
    <label htmlFor="planet-name">
      Planet Name
      <input
        type="text"
        id="planet-name"
        data-testid="name-filter"
        // value={ filters.filterByName.name }
        onChange={ handleChange }
      />
    </label>
  );
}
