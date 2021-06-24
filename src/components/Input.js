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
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </label>
      <label htmlFor="operation">
        <select
          data-testid="comparison-filter"
          id="operation"
          value={ operator }
          onChange={ ({ target }) => setOperator(target.value) }
        >
          <option value=">">maior que</option>
          <option value="<">menor que</option>
          <option value="=">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          data-testid="value-filter"
          id="value"
          type="text"
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
