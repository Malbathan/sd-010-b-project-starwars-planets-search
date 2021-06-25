import React, { useContext } from 'react';
import store from '../context/store';

export default function Inputs() {
  const { renderColumn, renderComparison, handleChange, handleClick } = useContext(store);

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

  const rendColumnComparison = (selectName, selectItems, dataTestId, defaulOption) => (
    <select
      name={ selectName }
      data-testid={ dataTestId }
      onChange={ handleChange }
    >
      <option>{defaulOption}</option>
      {selectItems
        .map((item) => (
          <option key={ item }>{ item }</option>))}
    </select>
  );

  const rendNumberInput = () => (
    <input
      name="number"
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

  return (
    <div>
      { rendNameInput() }
      { rendColumnComparison('column', renderColumn,
        'column-filter', 'Coluna') }
      { rendColumnComparison('comparison', renderComparison,
        'comparison-filter', 'Comparação') }
      { rendNumberInput() }
      { rendButton() }
    </div>
  );
}
