import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TableContext from '../../context/TableContext';

function SelectHeader() {
  const { setFilters, filters } = useContext(TableContext);

  return (
    <span>
      <select
        data-testid="column-filter"
        id="column"
        onChange={ ({ target: { value: column } }) => setFilters({
          ...filters,
          filterByNumericValues: {
            ...filters.filterByNumericValues, column } }) }
      >
        <option selected value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        id="comparison"
        onChange={ ({ target: { value: comparison } }) => setFilters({
          ...filters,
          filterByNumericValues: {
            ...filters.filterByNumericValues, comparison } }) }
      >
        <option selected value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </span>
  );
}
SelectHeader.propTypes = ({
  children: PropTypes.func,
}).isRequired;

export default SelectHeader;
