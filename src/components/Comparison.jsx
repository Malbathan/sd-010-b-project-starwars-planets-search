import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

const options = ['maior que', 'menor que', 'igual a'];

function Comparison() {
  const { setComparison, isFiltered } = useContext(StarWarsContext);

  const { comparison: { filters: { filterByNumericValues:
    filterNumericValues } } } = useContext(StarWarsContext);
  const { comparison } = filterNumericValues[0];

  const newOptions = options.filter((option) => option !== comparison);
  const optionsFiltered = isFiltered ? newOptions : options;
  return (
    <label htmlFor="comparison">
      Comparação:
      <select
        id="comparison"
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparison({
          filters: {
            filterByNumericValues: [
              {
                comparison: value,
              },
            ],
          },
        }) }
      >
        <option>{}</option>
        {
          optionsFiltered.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))
        }
      </select>
    </label>
  );
}

export default Comparison;
