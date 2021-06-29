import React, { useContext } from 'react';
import RenderTable from './table';

import { Context } from './Provider/Provider';

const Home = () => {
  const { filterInput,
    data,
    handleChange, handleClick, filterByColumn, deletedColumns,
    removeFromTheDeletedColumns,
  } = useContext(Context);

  return (
    <div>
      <input type="text" onChange={ filterInput } data-testid="name-filter" />
      <select
        name="column"
        onChange={ handleChange }
        data-testid="column-filter"
        defaultValue=""
      >
        {/* <option selected disabled hidden>Choose here</option> */}
        {/* <option defaultValue="selecione" hidden>selecione</option> */}
        {filterByColumn
          .map((el, index) => <option key={ index } value={ el }>{el}</option>) }
      </select>

      <select name="comparison" onChange={ handleChange } data-testid="comparison-filter">
        {/* <option defaultValue="selecione" hidden>selecione</option> */}
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

      <section data-testid="filter">
        {deletedColumns.length > 0 && deletedColumns
          .map((el, index) => (
            <label htmlFor={ index } key={ index }>
              <button
                onClick={ removeFromTheDeletedColumns }
                type="button"
                value={ el }
                id={ index }
              >
                {`${el} X`}
              </button>
            </label>))}
      </section>
      {data.length === 0 ? <p>carregando</p> : <RenderTable />}
    </div>
  );
};
export default Home;
