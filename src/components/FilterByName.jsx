import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Filter() {
  const { handleChange, filterName } = useContext(TableContext);

  return (
    <label htmlFor="filter-name">
      Pesquise
      {' '}
      <input
        value={ filterName }
        type="text"
        data-testid="name-filter"
        name="filter-name"
        onChange={ handleChange }
      />
    </label>
  );
}

export default Filter;
