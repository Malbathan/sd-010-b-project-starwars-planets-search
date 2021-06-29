import React, { useContext, useState } from 'react';
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

  // useEffect(() => {
  //   setLocalFilter({ ...local, column: columnList ? columnList[0] : [] });
  // }, [columnList]);

  const { name } = filters.filterByName;
  const { column } = local;

  function handleLocalStates({ target }) {
    const { id, value } = target;
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
      <label htmlFor="filter">
        <input
          data-testid="name-filter"
          id="filter"
          type="text"
          value={ name }
          onChange={ (e) => handleNameFilter(e) }
        />
      </label>
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          id="column"
          onChange={ (e) => handleLocalStates(e) }
        >
          {columnList.map((col, i) => <option value={ col } key={ i }>{col}</option>)}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          id="comparison"
          onChange={ (e) => handleLocalStates(e) }
        >
          {comparisons.map((comp, i) => <option value={ comp } key={ i }>{comp}</option>)}
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          min="0"
          value={ local.value }
          type="number"
          data-testid="value-filter"
          id="value"
          onChange={ (e) => handleLocalStates(e) }
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
              onClick={ (e) => handleFilterRemoval(e) }
              value={ el.column }
            >
              { `${el.column} X`}
            </button>
          </div>))}
      </label>
    </form>
  );
}
