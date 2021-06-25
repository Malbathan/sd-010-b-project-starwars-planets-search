import React, { useContext, useState } from 'react';
import SwContext from '../contexts/swContext';
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
  const [column, setColumn] = useState('population');
  const [comparison, setcomparison] = useState('maior que');
  const [amount, setAmount] = useState('');

  const renderOptions = (options) => options
    .map((opt, i) => <option key={ i } value={ opt }>{opt}</option>);
  const { handleFilter } = useContext(SwContext);
  return (
    <div className="header__logicalFilter__container">
      <div>
        <label htmlFor="filterType">
          Select type:
          <select
            id="filterType"
            value={ column }
            data-testid="column-filter"
            onChange={ ({ target: { value } }) => setColumn(value) }
          >
            {renderOptions(OPTIONS)}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="logicalOperator">
          Logical Operators:
          <select
            id="logicalOperator"
            value={ comparison }
            data-testid="comparison-filter"
            onChange={ ({ target: { value } }) => setcomparison(value) }
          >
            {renderOptions(LOGICAL_OPERATORS)}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="amountInput">
          Value:
          <input
            id="amountInput"
            type="number"
            value={ amount }
            data-testid="value-filter"
            onChange={ ({ target: { value } }) => setAmount(value) }
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilter({ column, comparison, amount }) }
      >
        Filter
      </button>
    </div>
  );
};

export default FilterByNum;
