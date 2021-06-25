import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function FiltersInsert() {
  const { setFilterByName } = useContext(TableContext);

  return (
    <label htmlFor="name-filter">
      Filtrar
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => {
          setFilterByName(value);
        } }
      />
    </label>
  );
}

export default FiltersInsert;
