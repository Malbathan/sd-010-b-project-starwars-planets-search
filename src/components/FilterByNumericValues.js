import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

export default function FilterByNumericValues() {
  const {
    setFilterByNumericValues,
    columnOptions,
    setColumnOptions,
  } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const comparisons = ['maior que', 'menor que', 'igual a'];

  const renderInput = (type) => (
    <label htmlFor={ `${type}` }>
      Value:
      <input
        data-testid={ `${type}-filter` }
        id={ type }
        min={ 0 }
        onChange={ ({ target }) => setValue(target.value) }
        type="number"
      />
    </label>
  );

  const renderOptions = (data) => data
    .map((option) => <option key={ option }>{option}</option>);

  const renderSelect = (type) => {
    const data = type === 'column' ? columnOptions : comparisons;
    const text = type === 'column' ? 'Column' : 'Comparison';
    return (
      <label htmlFor={ type }>
        {`${text}:`}
        <select
          id={ type }
          data-testid={ `${type}-filter` }
          onChange={
            ({ target }) => (type === 'column'
              ? setColumn(target.value) : setComparison(target.value))
          }
        >
          {renderOptions(data)}
        </select>
      </label>
    );
  };

  const handleClick = () => {
    setColumnOptions(columnOptions.filter((item) => item !== column));
    setFilterByNumericValues(
      (prevState) => [...prevState, {
        column,
        comparison,
        value,
      }],
    );
  };

  return (
    <form>
      {renderSelect('column')}
      {renderSelect('comparison')}
      {renderInput('value')}
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filter
      </button>
    </form>
  );
}
