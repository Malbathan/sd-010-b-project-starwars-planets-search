import React, { useContext, useState } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

export default function Filters() {
  const {
    handleNameFilter,
    filter,
    filterByNumericValues } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const nameFilter = filter.filters.filterByName.name;

  return (
    <form>
      <label htmlFor="filter">
        <input
          data-testid="name-filter"
          id="filter"
          type="text"
          value={ nameFilter }
          onChange={ (e) => handleNameFilter(e) }
        />
      </label>
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          value={ column }
          id="column"
          onChange={ (e) => setColumn(e.target.value) }
        >
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          value={ comparison }
          id="comparison"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value=">">maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          value={ value }
          type="number"
          data-testid="value-filter"
          id="value"
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <label htmlFor="btn">
        <button
          id="btn"
          onClick={ () => filterByNumericValues(column, comparison, value) }
          data-testid="button-filter"
          type="button"
        >
          {' '}
          Send Comparison
        </button>
      </label>
    </form>
  );
}
