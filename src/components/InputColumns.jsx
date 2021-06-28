import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

const optionsDefault = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function DropdownColumns() {
  const { setColumnFiltered,
    columnFiltered, isFiltered } = useContext(StarWarsContext);
  const { column } = columnFiltered;

  const options = optionsDefault.filter((option) => option !== column);

  const newOptions = isFiltered ? options : optionsDefault;

  return (
    <label htmlFor="columns">
      Filtre por coluna:
      <select
        data-testid="column-filter"
        id="columns"
        disabled={ !!isFiltered }
        onChange={ ({ target: { value } }) => setColumnFiltered({
          column: value,
        }) }
      >
        {
          newOptions.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))
        }
      </select>

    </label>
  );
}

export default DropdownColumns;
