import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

function Comparison() {
  const { setComparison } = useContext(StarWarsContext);
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
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </label>
  );
}

export default Comparison;
