import React, { useContext } from 'react';
import { Context } from './PlanetsProvider';

function Filters() {
  const {
    setFilterByName,
    setFilterByNumericValues,
    filterByNumericValues,
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
          name="column"
          id="column"
          data-testid="column-filter"
          onChange={ (e) => setFilterByNumericValues(e.target) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => setFilterByNumericValues(e.target) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          name="value"
          id="value"
          data-testid="value-filter"
          onChange={ (e) => setFilterByNumericValues(e.target) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => filterByNumericValues() }
        >
          filtrar
        </button>
      </div>
    </>
  );
}

export default Filters;
