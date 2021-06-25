import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

export default function FilterByNumericValues() {
  const { setFilterByNumericValues } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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
    const data = type === 'column' ? columns : comparisons;
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
    setColumns(columns.filter((item) => item !== column));
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
