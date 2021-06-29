import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Filter() {
  const { handleChange, filters: { filterByName: { name } } } = useContext(TableContext);

  return (
    <label htmlFor="filter-name">
      Pesquise
      {' '}
      <input
        value={ name }
        type="text"
        data-testid="name-filter"
        name="filter-name"
        onChange={ handleChange }
      />
    </label>
  );
}

export default Filter;
