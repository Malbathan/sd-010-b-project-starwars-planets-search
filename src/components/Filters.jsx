/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { DataContext } from '../context/PlanetsContext';

export default function Filters() {
  const { filterByName, filterByNumericValues, columns } = React.useContext(DataContext);

  const inputColumnFilter = React.useRef(null);
  const inputComparisonFilter = React.useRef(null);
  const inputValueFilter = React.useRef(null);

  function handleNameChange(e) {
    const { value } = e.target;
    filterByName(value);
  }

  function handleAmountChange() {
    const column = inputColumnFilter.current.value;
    const comparison = inputComparisonFilter.current.value;
    const { value } = inputValueFilter.current;
    filterByNumericValues(column, comparison, value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={ handleNameChange }
        placeholder="Filtre por nome do planeta"
        data-testid="name-filter"
      />
      <form>
        <fieldset>
          <select data-testid="column-filter" ref={ inputColumnFilter }>
            {columns.map((column) => (
              <option value={ column } key={ column }>{column}</option>
            ))}
          </select>
          <select data-testid="comparison-filter" ref={ inputComparisonFilter }>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            type="number"
            data-testid="value-filter"
            placeholder="quantidade"
            ref={ inputValueFilter }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleAmountChange }
          >
            Filtrar

          </button>
        </fieldset>
      </form>
    </div>
  );
}
