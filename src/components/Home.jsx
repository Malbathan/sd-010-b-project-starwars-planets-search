import React, { useContext } from 'react';
import RenderTable from './table';

import { Context } from './Provider/Provider';

const Home = () => {
  const { filterInput,
    data,
    handleChange, handleClick, filterByColumn,
  } = useContext(Context);

  return (
    <div>
      <input type="text" onChange={ filterInput } data-testid="name-filter" />
      <select
        id="batata"
        name="column"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {/* {console.log(filterByColumn.length)} */}
        {filterByColumn
          .map((el, index) => <option key={ index } value={ el }>{el}</option>) }
        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>
      <select name="comparison" onChange={ handleChange } data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
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
        data-testid="button-filter"
      >
        botão
      </button>
      {data.length === 0 ? <p>carregando</p> : <RenderTable />}
    </div>
  );
};
export default Home;
