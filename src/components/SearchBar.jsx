import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SearchBar() {
  const {
    handleName,
    addFilter,
    filters: { filterByNumericValues },
  } = useContext(PlanetsContext);

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ].filter((filter) => !filterByNumericValues
    .map(({ column }) => column).includes(filter));

  const filter = {
    column: columns[0],
    comparison: 'maior que',
    value: 0,
  };
  const handleFilter = ({ target: { id, value } }) => {
    console.log(filter);
    filter[id] = value;
    console.log(filter);
  };

  const nameInput = (func) => (
    <input type="text" id="name" data-testid="name-filter" onChange={ func } />
  );

  const columnsInput = (columnList) => (
    <select
      data-testid="column-filter"
      id="column"
      defaultValue={ filter.column }
      onChange={ handleFilter }
    >
      {columnList.map((column, index) => (
        <option key={ index } value={ column }>
          {column}
        </option>
      ))}
    </select>
  );

  const comparisonInput = () => (
    <select
      data-testid="comparison-filter"
      id="comparison"
      defaultValue={ filter.comparison }
      onChange={ handleFilter }
    >
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </select>
  );

  const valueInput = () => (
    <input
      style={ { width: 100 } }
      data-testid="value-filter"
      id="value"
      defaultValue={ filter.value }
      type="number"
      onChange={ handleFilter }
    />
  );

  const filterBtn = (func) => (
    <button
      data-testid="button-filter"
      type="button"
      onClick={ () => func(filter) }
    >
      Filtrar
    </button>
  );

  return (
    <form>
      {nameInput(handleName)}
      {columnsInput(columns)}
      {comparisonInput()}
      {valueInput()}
      {filterBtn(addFilter)}
    </form>
  );
}

export default SearchBar;
