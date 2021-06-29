import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

const selectColumnOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

const comparisons = ['maior que', 'menor que', 'igual a'];

export default function Filters() {
  const {
    handleNameFilter,
    filters,
    filterByValues,
    setFilter,
  } = useContext(StarWarsContext);

  const [local, setLocalFilter] = useState(
    { column: 'population', comparison: 'maior que', value: 0 },
  );
  const [columnList, setColumn] = useState(selectColumnOptions);

  useEffect(() => {
    setLocalFilter((prevState) => ({ ...prevState,
      column: columnList[0] }));
  }, [columnList]);

  const { name } = filters.filterByName;
  const { column } = local;

  function handleLocalStates({ target: { id, value } }) {
    setLocalFilter({ ...local, [id]: value });
  }

  function handleBtnClick() {
    filterByValues(local);
    setColumn(columnList.filter((col) => col !== column));
  }

  function handleFilterRemoval(e) {
    e.preventDefault();
    setFilter({ ...filters,
      filterByNumericValues:
      filters.filterByNumericValues.filter((ele) => ele.column !== e.target.value) });
  }

  return (
    <form>
      <label htmlFor="name">
        <input
          data-testid="name-filter"
          id="name"
          type="text"
          value={ name }
          onChange={ handleNameFilter }
        />
      </label>
      <label htmlFor="column">
        <select
          data-testid="column-filter"
          id="column"
          onChange={ handleLocalStates }
        >
          {columnList.map((col, i) => <option value={ col } key={ i }>{col}</option>)}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          id="comparison"
          onChange={ handleLocalStates }
        >
          {comparisons.map((comp, i) => <option value={ comp } key={ i }>{comp}</option>)}
        </select>
      </label>
      <label htmlFor="value">
        <input
          min="0"
          value={ local.value }
          type="number"
          data-testid="value-filter"
          id="value"
          onChange={ handleLocalStates }
        />
      </label>
      <label htmlFor="btn">
        <button
          id="btn"
          onClick={ handleBtnClick }
          data-testid="button-filter"
          type="button"
        >
          {' '}
          Send Comparison
        </button>
        {filters.filterByNumericValues.map((el, i) => (
          <div data-testid="filter" key={ i }>
            <button
              type="button"
              onClick={ handleFilterRemoval }
              value={ el.column }
            >
              { `${el.column} X`}
            </button>
          </div>))}
      </label>
    </form>
  );
}
