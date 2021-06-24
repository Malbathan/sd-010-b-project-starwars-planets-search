import React from 'react';
import '../styles/FilterByNum.css';

const OPTIONS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const LOGICAL_OPERATORS = ['maior que', 'menor que', 'igual a'];

const FilterByNum = () => {
  const renderOptions = (options) => options
    .map((opt, i) => <option key={ i } value={ opt }>{opt}</option>);

  return (
    <div className="header__logicalFilter__container">
      <div>
        <label htmlFor="filterType">
          Select type:
          <select id="filterType" data-testid="column-filter">
            {renderOptions(OPTIONS)}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="logicalOperator">
          Logical Operators:
          <select id="logicalOperator" data-testid="comparison-filter">
            {renderOptions(LOGICAL_OPERATORS)}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="amountInput">
          Value:
          <input id="amountInput" type="number" data-testid="value-filter" />
        </label>
      </div>
      <button type="button" data-testid="button-filter">Filter</button>
    </div>

  );
};

export default FilterByNum;
