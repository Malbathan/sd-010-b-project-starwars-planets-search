import React, { useContext, useEffect, useState } from 'react';
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
  const [options, setOptions] = useState(OPTIONS);

  const renderOptions = (opts) => opts
    .map((opt, i) => <option key={ i } value={ opt }>{opt}</option>);

  const { handleFilter } = useContext(SwContext);

  const handleClick = () => {
    handleFilter({ column, comparison, amount });
    const index = options.findIndex((el) => el === column);
    const arr = options;
    arr.splice(index, 1);
    setColumn(arr[0]);
    setOptions(arr);
  };

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
            {renderOptions(options)}
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
        onClick={ handleClick }
      >
        Filter
      </button>
    </div>
  );
};

export default FilterByNum;
