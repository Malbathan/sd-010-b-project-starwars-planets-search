import React, { useContext } from 'react';
import store from '../context/store';

export default function Inputs() {
  const { details, operator, number: num, filteredByNumbers,
    handleChange, handleClick, clearFilter } = useContext(store);

  const rendNameInput = () => (
    <input
      name="name"
      id="filterByName"
      type="text"
      data-testid="name-filter"
      placeholder="Filtrar por nome"
      onChange={ handleChange }
    />
  );

  const rendColumnComparison = (selectName, selectItems, dataTestId) => (
    <select
      name={ selectName }
      data-testid={ dataTestId }
      onChange={ handleChange }
    >
      {selectItems
        .map((item) => (
          <option key={ item }>{ item }</option>))}
    </select>
  );

  const rendNumberInput = () => (
    <input
      name="number"
      value={ num }
      data-testid="value-filter"
      type="number"
      onChange={ handleChange }
    />
  );

  const rendButton = () => (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ handleClick }
    >
      Filtrar
    </button>
  );

  const rendFilterButton = () => (
    filteredByNumbers.map(({ id, column, comparison, number }) => (
      <div key={ id }>
        <p data-testid="filter">
          { `Filtrado por ${column} ${comparison} ${number}` }
          <button type="button" onClick={ () => clearFilter(id) }>X</button>
        </p>
      </div>
    ))
  );

  return (
    <div>
      { rendNameInput() }
      { rendColumnComparison('column', details, 'column-filter') }
      { rendColumnComparison('comparison', operator, 'comparison-filter') }
      { rendNumberInput() }
      { rendButton() }
      <h4>Filtros:</h4>
      { rendFilterButton() }
    </div>
  );
}
