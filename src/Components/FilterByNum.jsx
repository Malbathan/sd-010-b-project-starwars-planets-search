import React, { useContext, useState } from 'react';
import SwContext from '../contexts/swContext';
import '../styles/FilterByNum.css';

const LOGICAL_OPERATORS = ['maior que', 'menor que', 'igual a'];

const FilterByNum = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setcomparison] = useState('maior que');
  const [amount, setAmount] = useState('');
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const renderOptions = (opts) => opts
    .map((opt, i) => <option key={ i } value={ opt }>{opt}</option>);

  const { handleFilter } = useContext(SwContext);

  const handleClick = async () => {
    if (!amount) return;
    handleFilter({ column, comparison, amount });
    const index = options.findIndex((el) => el === column);

    options.splice(index, 1);
    await setColumn(options[0]);
    await setOptions(options.filter((el) => el !== column));
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
