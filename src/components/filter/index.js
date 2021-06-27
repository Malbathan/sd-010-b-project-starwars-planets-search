import React, { useContext } from 'react';
import DataContext from '../../context';

export default function FilterName() {
  const { setFiltro } = useContext(DataContext);
  return (
    <label htmlFor="filterByName">
      Name:
      <input
        type="text"
        id="filterByName"
        data-testid="name-filter"
        onChange={ ({ target }) => {
          setFiltro({ filterByName: target.value });
        } }
      />
    </label>
  );
}
