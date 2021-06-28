import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

const options = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function DropdownColumns() {
  const { setColumn, isFiltered } = useContext(StarWarsContext);

  const { column: { filters: { filterByNumericValues } } } = useContext(StarWarsContext);
  const { column } = filterByNumericValues[0];

  const newOptions = options.filter((option) => option !== column);
  let optionsFiltered = isFiltered ? newOptions : options;

  function removeFilter() {
    optionsFiltered = options;
  }

  return (
    <>
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
      <button type="button" onClick={ () => removeFilter() }>X</button>
    </>
  );
}

export default DropdownColumns;
