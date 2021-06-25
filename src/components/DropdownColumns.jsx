import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

const options = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function DropdownColumns() {
  const { setColumn, isFiltered } = useContext(StarWarsContext);

  const { column: { filters: { filterByNumericValues } } } = useContext(StarWarsContext);
  const { column } = filterByNumericValues[0];

  const newOptions = options.filter((option) => option !== column);
  const optionsFiltered = isFiltered ? newOptions : options;

  return (
    <label htmlFor="columns">
      Filtre por coluna:
      <select
        data-testid="column-filter"
        id="columns"
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

        {
          optionsFiltered.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))
        }
      </select>
    </label>
  );
}

export default DropdownColumns;
