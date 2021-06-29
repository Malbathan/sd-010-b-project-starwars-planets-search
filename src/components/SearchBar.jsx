import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../App.css';

function SearchBar() {
  const {
    data: { results },
    handleName,
    addFilter,
    setOrder,
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

  const order = {
    column: 'name',
    sort: 'ASC',
  };

  const handleFilter = ({ target: { id, value } }) => {
    filter[id] = value;
  };

  const handleOrder = ({ target: { name, value } }) => {
    order[name] = value;
  };

  const filterForms = () => (
    <form className="App-search-bar">
      <input type="text" id="name" data-testid="name-filter" onChange={ handleName } />
      <select
        data-testid="column-filter"
        id="column"
        defaultValue={ columns[0] }
        onChange={ handleFilter }
      >
        {columns.map((column, index) => (
          <option key={ index } value={ column }>
            {column}
          </option>
        ))}
      </select>
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
      <input
        style={ { width: 100 } }
        data-testid="value-filter"
        id="value"
        defaultValue={ filter.value }
        type="number"
        onChange={ handleFilter }
      />
      <button
        data-testid="button-filter"
        type="button"
        disabled={ !columns.length > 0 }
        onClick={ () => addFilter(filter) }
      >
        Filtrar
      </button>
    </form>
  );

  const sortForms = () => (
    results && (
      <form className="App-order-bar">
        <select
          data-testid="column-sort"
          name="column"
          onChange={ handleOrder }
        >
          {Object.keys(results[0]).map((item) => (
            <option key={ item } value={ item }>{item}</option>))}
        </select>
        <input
          checked
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          name="sort"
          onChange={ handleOrder }
        />
        ASC
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          name="sort"
          onChange={ handleOrder }
        />
        DESC
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => setOrder(order) }
        >
          Ordenar
        </button>
      </form>
    )
  );

  return (
    <div>
      {filterForms()}
      {sortForms()}
    </div>
  );
}

export default SearchBar;
