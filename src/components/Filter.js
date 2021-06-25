import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterName = () => {
  const { setFilter,
    filterNumeric,
    filters: { filterByName: { name } } } = useContext(StarWarsContext);
  return (
    <div>
      <input
        data-testid="name-filter"
        value={ name }
        name="filter"
        type="text"
        onChange={ ({ target: { value } }) => setFilter(value) }
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ filterNumeric }
      >
        <option value="population">
          population
        </option>
        <option value="orbital_period">
          orbital_period
        </option>
        <option value="diameter">
          diameter
        </option>
        <option value="rotation_period">
          rotation_period
        </option>
        <option value="surface_water">
          surface_water
        </option>
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ filterNumeric }
      >
        <option>
          maior que
        </option>
        <option>
          menor que
        </option>
        <option>
          igual a
        </option>
      </select>

      <input
        type="number"
        onChange={ filterNumeric }
        name="value"
        data-testid="value-filter"
      />

      <button
        type="button"
        data-testid="button-filter"
        // onClick={}
      >
        Adicionar Filtro
      </button>

    </div>
  );
};

export default FilterName;
