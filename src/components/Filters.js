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
    handleSortClick,
  } = useContext(StarWarsContext);

  const [local, setLocalFilter] = useState(
    { column: 'population', comparison: 'maior que', value: 0 },
  );
  const [columnList, setColumn] = useState(selectColumnOptions);
  const [localSort, setSort] = useState({ column: 'name', sort: 'ASC' });

  useEffect(() => {
    setLocalFilter((prevState) => ({
      ...prevState,
      column: columnList.length ? columnList[0] : prevState.column,
    }));
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

  function handleFilterRemoval({ target: { value } }) {
    setFilter({ ...filters,
      filterByNumericValues:
      filters.filterByNumericValues.filter((ele) => ele.column !== value) });
    // setColumn((prevState) => ([...prevState, selectColumnOptions.filter((opt) => opt === value)]));
  }

  function handleSortSelectedColumn({ target: { value } }) {
    setSort({ ...localSort, column: value });
  }

  function handleInputOrder({ target: { value } }) {
    setSort({ ...localSort, sort: value });
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
          value={ local.valuehandleSortSelectedColumn }
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
          disabled={ !columnList.length }
        >
          Send Comparison
        </button>
        {filters.filterByNumericValues.map((el) => (
          <label htmlFor="filter-btn" data-testid="filter" key={ el.column }>
            <button
              type="button"
              id="filter-btn"
              onClick={ handleFilterRemoval }
              value={ el.column }
            >
              { ` ${el.column} ${el.comparison} ${el.value} X`}
            </button>
          </label>))}
      </label>
      <label htmlFor="column-sort">
        {' Select column you wanna order:  '}
        <select
          onChange={ handleSortSelectedColumn }
          id="column-sort"
          data-testid="column-sort"
        >
          (
          <option value="name">Name</option>
          ).concat(
          {selectColumnOptions.map((col) => (
            <option value={ col } key={ col }>{col}</option>))}
          )
        </select>
      </label>
      <label htmlFor="sort-inputs">
        <label htmlFor="asc-input">
          ASC
          <input
            onChange={ handleInputOrder }
            name="sort-inputs"
            id="asc-input"
            type="radio"
            value="ASC"
            data-testid="column-sort-input-asc"
          />
        </label>
        <label htmlFor="desc-input">
          DESC
          <input
            onChange={ handleInputOrder }
            name="sort-inputs"
            id="desc-input"
            type="radio"
            value="DESC"
            data-testid="column-sort-input-desc"
          />
        </label>
      </label>
      <button
        id="sort-button"
        type="button"
        data-testid="column-sort-button"
        onClick={ () => handleSortClick(localSort) }
      >
        {' '}
        Sort
      </button>
    </form>
  );
}
