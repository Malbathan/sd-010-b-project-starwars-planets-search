import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const [localFilter, setLocalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    number: 0,
  });

  const handleClick = ({ name, value }) => {
    setLocalFilter({
      ...localFilter,
      [name]: value,
    });
  };

  const { handleChange, handleColumn } = useContext(PlanetsContext);
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
          onChange={ handleColumn }
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
          onChange={ handleColumn }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        {' '}
        <input
          name="number"
          type="number"
          data-testid="value-filter"
          placeholder="População"
          onChange={ handleColumn }
        />
        {' '}
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>
    </section>
  );
}

export default Filter;
