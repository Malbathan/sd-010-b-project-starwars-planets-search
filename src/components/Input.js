import React, { useContext } from 'react';
import { Context } from '../contexts';

function Input() {
  const { name,
    setName,
    column,
    setColumn,
    setOperator,
    operator,
    setNumber,
    number,
    setFullFilter,
  } = useContext(Context);

  function handleClick() {
    setFullFilter(
      {
        filterByName: { name },
        filterByNumericValues: [
          {
            column, comparison: operator, value: number,
          },
        ],
      },
    );
  }

  return (
    <>
      <label htmlFor="name">
        <input
          data-testid="name-filter"
          id="name"
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="column">
        <select
          data-testid="column-filter"
          id="column"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="operation">
        <select
          data-testid="comparison-filter"
          id="operation"
          value={ operator }
          onChange={ ({ target }) => setOperator(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          data-testid="value-filter"
          id="value"
          type="number"
          value={ number }
          onChange={ ({ target }) => setNumber(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </>
  );
}

export default Input;
