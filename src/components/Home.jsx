import React, { useContext } from 'react';
import RenderTable from './table';

import { Context } from './Provider/Provider';

const Home = () => {
  const { filterInput, data, handleClick } = useContext(Context);

  return (
    <div>
      <input type="text" onChange={ filterInput } data-testid="name-filter" />
      <select
        id="batata"
        name="column"
        onClick={ handleClick }
        data-testid="column-filter"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select name="comparison" onClick={ handleClick } data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        name="value"
        placeholder="...numeros"
        data-testid="value-filter"
        onChange={ handleClick }
      />

      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        botão
      </button>
      {data.length === 0 ? <p>carregando</p> : <RenderTable />}
    </div>
  );
};
export default Home;
