import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters(params) {
  const { filters, setFilters } = useContext(Context);

  return (
    <header>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="digite o nome do filme"
      />
    </header>
  );
}

export default Filters;
