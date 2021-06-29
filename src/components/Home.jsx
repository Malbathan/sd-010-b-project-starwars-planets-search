import React, { useContext } from 'react';
import RenderTable from './table';

import { Context } from './Provider/Provider';

const Home = () => {
  const { filterInput,
    data,
    handleChange, handleClick, filterByColumn, deletedColumns,
    removeFromTheDeletedColumns, handleOrder,
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

      <select data-testid="column-sort" onChange={ handleChange } name="column-sort">
        {data.length > 0 && Object.keys(data[0])
          .map((el, index) => (
            <option key={ index } onChange={ handleChange }>
              {el}
            </option>))}

      </select>
      <label htmlFor="sortASC">
        ASC
        <input
          type="radio"
          name="sort"
          id="sortASC"
          value="ASC"
          data-testid="column-sort-input-asc"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="sortDESC">
        DESC
        <input
          type="radio"
          id="sortDESC"
          name="sort"
          value="DESC"
          data-testid="column-sort-input-desc"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        onClick={ handleOrder }
        data-testid="column-sort-button"
      >
        Ordene

      </button>

      {data.length === 0 ? <p>carregando</p> : <RenderTable />}
    </div>
  );
};
export default Home;
