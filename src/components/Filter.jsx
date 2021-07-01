import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { setLocalFilter, handleChange } = useContext(PlanetsContext);

  const [columnFilter, setColumnFilter] = useState();
  const [comparisonFilter, setComparisonFilter] = useState();
  const [valueFilter, setValueFilter] = useState();

  const handleClick = () => {
    setLocalFilter({
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    });
  };

  return (
    <section>
      <div>
        <span>Planeta: </span>
        <input
          name="input-name"
          onChange={ handleChange }
          placeholder="Nome do planeta"
          data-testid="name-filter"
        />
      </div>
      <div>
        <br />
        <span>População: </span>
        <select
          name="column"
          data-testid="column-filter"
          onChange={ (e) => setColumnFilter(e.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        {' '}
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (e) => setComparisonFilter(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        {' '}
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          placeholder="População"
          onChange={ (e) => setValueFilter(e.target.value) }
        />
        {' '}
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
      </div>
    </section>
  );
}

export default Filter;
