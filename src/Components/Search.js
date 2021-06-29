import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Search() {
  const { filter, setFilter } = useContext(PlanetsContext);

  const filterChange = ({ target: { value } }) => {
    setFilter({
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <label htmlFor="search">
      <input
        data-testid="name-filter"
        value={ filter.filters.filterByName.name }
        onChange={ filterChange }
      />
    </label>
  );
}

export default Search;
