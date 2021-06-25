import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

function DropdownColumns() {
  const { setColumn } = useContext(StarWarsContext);
  return (
    <label htmlFor="columns">
      Filtre por coluna:
      <select
        id="columns"
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setColumn({
          filters: {
            filterByNumericValues: [
              {
                column: value,
              },
            ],
          },
        }) }
      >
        <option>{}</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    </label>
  );
}

export default DropdownColumns;
