import React, { useContext } from 'react';
import StarwarsContext from './context/StarwarsContext';

function FilterByName() {
  const { filters: { filterByName: { name } }, setFilters } = useContext(StarwarsContext);

  const handleChange = ({ target }) => {
    setFilters({ filterByName: { name: target.value } });
  };

  return (
    <label htmlFor="filter-by-name">
      Filter By Name:
      <input
        id="filter-by-name"
        data-testid="name-filter"
        name="name"
        onChange={ handleChange }
        type="text"
        value={ name }
      />
    </label>
  );
}

export default FilterByName;
