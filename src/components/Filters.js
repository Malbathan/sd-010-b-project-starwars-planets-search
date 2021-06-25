import React, { useContext, createRef } from 'react';
// import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const {
    setFilterByName,
    setFilterByValue,
    filters: { filterByValue },
  } = useContext(PlanetsContext);

  const filterColumn = createRef();
  const filterComparison = createRef();
  const filterValue = createRef();

  const filterList = () => {
    setFilterByValue([
      ...filterByValue,
      {
        column: filterColumn.current.value,
        comparison: filterComparison.current.value,
        value: parseFloat(filterValue.current.value),
      },
    ]);
  };

  const filterUsedAlready = (filterType, option) => filterByValue
    .find((filter) => filter[filterType] === option);

  const renderColumnOptions = () => {
    const options = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const filteredOptions = options.filter(
      (option) => !filterUsedAlready('column', option),
    );
    return filteredOptions.map((filteredOption, index) => (
      <option key={ index } value={ filteredOption }>
        {filteredOption}
      </option>
    ));
  };

  const removeFilter = (filter) => {
    const filterToRemove = filterByValue.filter(({ column }) => column !== filter);
    setFilterByValue(filterToRemove);
  };

  const renderUsedFilterList = () => {
    if (filterByValue.length === 0) return;
    return filterByValue.map((filter) => {
      const { column, comparison, value } = filter;
      return (
        <p key={ column } data-testid="filter">
          {`${column} ${comparison} ${value}`}
          <button
            id={ column }
            type="button"
            onClick={ ({ target }) => {
              removeFilter(target.id);
            } }
          >
            X
          </button>
        </p>
      );
    });
  };

  return (
    <>
      <label htmlFor="filterByName">
        Name
        <input
          id="filterByName"
          data-testid="name-filter"
          type="text"
          onChange={ ({ target: { value } }) => {
            setFilterByName(value);
          } }
        />
      </label>
      <label htmlFor="filterColumn">
        Column
        <select
          id="filterColumn"
          ref={ filterColumn }
          data-testid="column-filter"
        >
          {renderColumnOptions()}
        </select>
      </label>

      <label htmlFor="filterComparison">
        Comparison
        <select
          id="filterComparison"
          ref={ filterComparison }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="filterValue">
        Value
        <input
          id="filterValue"
          ref={ filterValue }
          data-testid="value-filter"
          type="number"
        />
      </label>
      <button onClick={ filterList } type="button" data-testid="button-filter">
        Search
      </button>
      <div>{renderUsedFilterList()}</div>
    </>
  );
}

// Filters.propTypes = {};

export default Filters;
