import React, { useContext } from 'react';
import ContextStarWars from '../context/ContextStarWars';

function TableFilter() {
  const { filters, functionSetFilters } = useContext(ContextStarWars);

  return (
    <div className="TableFilter">
      <form>
        <input
          type="text"
          placeholder="Filtrar por nome"
          data-testid="name-filter"
          value={ filters.filterByName.name }
          onChange={
            ({ target: { value } }) => functionSetFilters('filterByName', value)
          }
        />
      </form>
    </div>
  );
}

export default TableFilter;
