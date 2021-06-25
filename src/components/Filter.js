import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterName = () => {
  const { setFilter,
    filterNumeric,
    aplyFilter,
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
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ filterNumeric }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
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
        onClick={ aplyFilter }
      >
        Adicionar Filtro
      </button>

    </div>
  );
};

export default FilterName;
