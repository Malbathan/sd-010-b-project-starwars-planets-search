import React, { useContext } from 'react';
import RenderTable from './table';

import { Context } from './Provider/Provider';

const Home = () => {
  const { filterInput, data, handleChange, handleClick, filterNumeric: { numbers: { column, comparison, value } } } = useContext(Context);

  const verify = () => {
    if (column.length === 0 || comparison.length === 0 || value.length === 0) { return true; }
    return false;
  };

  return (
    <div>
      <input type="text" onChange={ filterInput } data-testid="name-filter" />
      <select
        id="batata"
        name="column"
        onClick={ handleChange }
        data-testid="column-filter"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select name="comparison" onClick={ handleChange } data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        name="value"
        placeholder="...numeros"
        data-testid="value-filter"
        onChange={ handleChange }
      />

      <button
        type="button"
        onClick={ handleClick }
        disabled={ verify() }
        data-testid="button-filter"
      >
        botão
      </button>
      {data.length === 0 ? <p>carregando</p> : <RenderTable />}
    </div>
  );
};
export default Home;
