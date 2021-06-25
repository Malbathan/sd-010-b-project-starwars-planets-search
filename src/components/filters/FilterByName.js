import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function FilterByName() {
  const { handleName } = useContext(StarWarsContext);
  return (
    <label htmlFor="filter">
      Search:
      <input
        id="filter"
        type="text"
        name="filter"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => handleName(value) }
      />

    </label>
  );
}

export default FilterByName;
