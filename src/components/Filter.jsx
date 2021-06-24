import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const numberValuesOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonFilters = [
  'maior que',
  'menor que',
  'igual a',
];

function Filter() {
  const { handleChangeText, textFilter } = useContext(PlanetsContext);
  return (
    <form>

      <label htmlFor="name-filter">
        Nome:
        <input
          type="text"
          data-testid="name-filter"
          id="name-filter"
          value={ textFilter }
          onChange={ handleChangeText }
        />
      </label>

      <label htmlFor="column-filter">
        Filtrar por:
        <select name="column" id="column-filter" data-testid="column-filter">
          {numberValuesOptions.map((el, idx) => (
            <option key={ idx }>{el}</option>
          ))}
        </select>
      </label>

      <select name="comparation" id="comparation" data-testid="comparison-filter">
        {comparisonFilters.map((el, idx) => (
          <option key={ idx }>{el}</option>
        ))}
      </select>

      <input
        type="number"
        data-testid="value-filter"
        id="value-filter"
      />

      <button type="button" data-testid="button-filter">Filtrar</button>

    </form>
  );
}

export default Filter;
