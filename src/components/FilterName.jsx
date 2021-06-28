import React, { useContext } from 'react';
import StarWarsContext from '../hooks/StarWarsContext';

export default function FilterName() {
  const { setFilters } = useContext(StarWarsContext);
  return (
    <label htmlFor="filterByName">
      Name:
      <input
        type="text"
        id="filterByName"
        data-testid="name-filter"
        onChange={ ({ target }) => {
          setFilters({ [target.id]: { name: target.value } });
        } }
      />
    </label>
  );
}
