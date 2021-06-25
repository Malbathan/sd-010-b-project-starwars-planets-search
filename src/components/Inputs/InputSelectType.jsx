import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function InputSelectType() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  function handleColumn({ target }) {
    const newValue = target.value;
    setFilters({
      ...filters,
      filterByNumericValues: [{
        column: newValue,
      }] });
  }

  console.log(filterByNumericValues);

  return (
    <div>
      <select
        name="tipo"
        id="tipo"
        data-testid="column-filter"
        onChange={ handleColumn }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    </div>
  );
}

export default InputSelectType;
