import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Sort() {
  const { filterData, data, columnSelectArray } = useContext(PlanetsContext);
  if (!filterData || !data || data.length === 0) {
    return null;
  }
  return (
    <div>
      Ordenar:
      <label htmlFor="column">
        <select id="column">
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
          id="asc"
          type="radio"
          name="sort"
          required
        />
      </label>
      <label htmlFor="desc">
        Desc
        <input
          id="desc"
          type="radio"
          name="sort"
          required
        />
      </label>
      <button type="button">Ordenar</button>
    </div>
  );
}

export default Sort;
