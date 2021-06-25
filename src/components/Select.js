import React, { useContext } from 'react';
import context from '../Context/Context';

const Select = () => {
  const { handleSelect, handleClick } = useContext(context);
  return (
    <section>
      <select id="column" onChange={ handleSelect } data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select id="comparation" onChange={ handleSelect } data-testid="value-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </section>
  );
};

export default Select;
