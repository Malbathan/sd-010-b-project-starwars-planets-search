import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { search, searchOnChange } = useContext(PlanetsContext);
  const { filters: { filterByName: { name: searchText } } } = search;

  return (
    <input
      value={ searchText }
      onChange={ searchOnChange }
      placeholder="Search a planet"
      data-testid="name-filter"
    />
  );
}

export default Filter;
