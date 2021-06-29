import React, { useContext } from 'react';
import ApiContext from '../services/ApiContext';

function Filter() {
  const { filterName } = useContext(ApiContext);
  return (
    <input
      type="text"
      onChange={ ({ target: { value } }) => filterName(value) }
      data-testid="name-filter"
    />
  );
}

export default Filter;
