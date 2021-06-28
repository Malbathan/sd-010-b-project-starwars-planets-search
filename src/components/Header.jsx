import React, { useContext } from 'react';

import DataContext from '../context/DataContext';

function Header() {
  const { setFilter, filter } = useContext(DataContext);

  function handleChange({ target: { value } }) {
    if (value.length > 0) {
      setFilter({ filters: { filterByName: { name: value } } });
    }

    if (value.length === 0) {
      setFilter({ filters: { filterByName: { name: '' } } });
    }
  }

  return (
    <header>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="filtro"
        name="filterByName"
        onChange={ handleChange }
        value={ filter.filters.filterByName.name }
      />
    </header>
  );
}

export default Header;
