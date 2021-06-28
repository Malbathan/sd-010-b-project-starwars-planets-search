import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

const optionsDefault = ['maior que', 'menor que', 'igual a'];

function Comparison() {
  const { setComparison,
    comparison, isFiltered, setIsFiltered } = useContext(StarWarsContext);
  const { comparison: comparisonValue } = comparison;

  const options = optionsDefault.filter((option) => option !== comparisonValue);

  const newOptions = isFiltered ? options : optionsDefault;

  function setDefault() {
    setIsFiltered(false);
  }

  return (
    <label htmlFor="comparison" data-testid="filter">
      Comparação:
      <select
        id="comparison"
        data-testid="comparison-filter"
        disabled={ !!isFiltered }
        onChange={ ({ target: { value } }) => setComparison({
          comparison: value,
        }) }
      >
        <option>{}</option>
        {
          newOptions.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))
        }
      </select>
      <button type="button" onClick={ () => setDefault() }>X</button>
    </label>
  );
}

export default Comparison;
