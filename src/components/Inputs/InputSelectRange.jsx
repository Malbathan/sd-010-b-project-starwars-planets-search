import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function InputSelectRange() {
  const { filters, setFilters } = useContext(StarWarsContext);

  function handleComparison({ target }) {
    const newValue = target.value;
    setFilters({
      ...filters,
      filterByNumericValues: [{
        comparison: newValue,
      }] });
  }

  return (
    <div>
      <select
        name="faixa-de-busca"
        id="faixa-de-busca"
        data-testid="comparison-filter"
        onChange={ handleComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </div>
  );
}

export default InputSelectRange;
