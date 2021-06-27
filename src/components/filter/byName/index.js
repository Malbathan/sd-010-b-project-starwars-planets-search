import React, { useContext } from 'react';
import DataContext from '../../../context';

export default function FilterName() {
  const { setFiltro, filtro } = useContext(DataContext);
  return (
    <label htmlFor="filterByName">
      Name:
      <input
        type="text"
        id="filterByName"
        data-testid="name-filter"
        onChange={ ({ target }) => {
          const { filterByNumericValues } = filtro;
          setFiltro({
            filterByName: { name: target.value },
            filterByNumericValues,
          });
        } }
      />
    </label>
  );
}
