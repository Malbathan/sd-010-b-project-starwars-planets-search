import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

export default function FilterByName() {
  const { setName } = useContext(StarWarsContext);
  return (
    <label htmlFor="name">
      Planet:
      <input
        type="text"
        id="name"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => setName(value) }
      />
    </label>
  );
}
