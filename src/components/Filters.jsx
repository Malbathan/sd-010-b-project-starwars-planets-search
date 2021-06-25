import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters(params) {
  const { filters, setFilters } = useContext(Context);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  return (
    <header>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
        placeholder="digite o nome do filme"
      />
    </header>
  );
}

export default Filters;
