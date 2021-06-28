import React, { useContext } from 'react';
import { Context } from './PlanetsProvider';

function Filters() {
  const {
    setFilterByName,
    editFilterByNumericValues,
    formDataNumericFilter: { column, comparison, value },
    addFilterByNumericValues,
    columns,
    filters: { filterByNumericValues },
    restoreColumn,
  } = useContext(Context);

  return (
    <>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="filterByName"
          id="filterByName"
          onChange={ (e) => setFilterByName(e.target) }
        />
      </div>
      <div>
        <select
          value={ column }
          name="column"
          id="column"
          data-testid="column-filter"
          onChange={ (e) => editFilterByNumericValues(e.target) }
        >
          {columns.map((columnOption) => (
            <option key={ columnOption } value={ columnOption }>{columnOption}</option>
          ))}
        </select>
        <select
          value={ comparison }
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => editFilterByNumericValues(e.target) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          value={ value }
          type="number"
          name="value"
          id="value"
          data-testid="value-filter"
          onChange={ (e) => editFilterByNumericValues(e.target) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => addFilterByNumericValues() }
        >
          adicionar filtro
        </button>
      </div>
      <div data-testid="filter">
        {filterByNumericValues && filterByNumericValues.map((filter) => (
          <span key={ filter.column }>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
            <button
              type="button"
              onClick={ () => restoreColumn(filter.column) }
            >
              X
            </button>
          </span>
        )) }
      </div>
    </>
  );
}

export default Filters;
