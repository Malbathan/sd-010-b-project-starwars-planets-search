import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterName = () => {
  const { setFilter, filters: { filterByName: { name } } } = useContext(StarWarsContext);
  return (
    <input
      data-testid="name-filter"
      value={ name }
      name="filter"
      type="text"
      onChange={ ({ target: { value } }) => setFilter(value) }
    />
  );
};

export default FilterName;
