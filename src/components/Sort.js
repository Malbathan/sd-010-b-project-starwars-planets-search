import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Sort() {
  const {
    filterData,
    data,
    columnSelectArray,
    handleSortColumnFilter,
    handleSortBoolean,
    requestSort } = useContext(PlanetsContext);
  if (!filterData || !data || data.length === 0) {
    return null;
  }
  return (
    <div>
      Ordenar:
      <label htmlFor="column">
        <select data-testid="column-sort" id="column" onChange={ handleSortColumnFilter }>
          {columnSelectArray.map((column) => (
            <option
              key={ column.arrayIndex }
              value={ column.valor }
            >
              {column.valor}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="asc">
        Asc
        <input
          data-testid="column-sort-input-asc"
          value="asc"
          id="asc"
          type="radio"
          name="sort"
          required
          onClick={ handleSortBoolean }
        />
      </label>
      <label htmlFor="desc">
        Desc
        <input
          data-testid="column-sort-input-desc"
          value="desc"
          id="desc"
          type="radio"
          name="sort"
          required
          onClick={ handleSortBoolean }
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ requestSort }
      >
        Ordenar
      </button>
    </div>
  );
}

export default Sort;
