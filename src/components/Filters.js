import React, { useContext, useState } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

export default function Filters() {
  const {
    handleNameFilter,
    filter,
    filterByNumericValues } = useContext(StarWarsContext);
  const [local, setFilter] = useState({ column: '', comparison: '', value: 0 });

  const nameFilter = filter.filterByName.name;
  const handleLocalStates = ({ target }) => {
    const { id, value } = target;
    setFilter({ ...local, [id]: value });
  };

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
          value={ local.column }
          id="column"
          onChange={ (e) => handleLocalStates(e) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          value={ local.comparison }
          id="comparison"
          onChange={ (e) => handleLocalStates(e) }
        >
          <option value=">">maior que</option>
          <option value="<">menor que</option>
          <option value="=">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          min="0"
          value={ local.value }
          type="number"
          data-testid="value-filter"
          id="value"
          onChange={ (e) => handleLocalStates(e) }
        />
      </label>
      <label htmlFor="btn">
        <button
          id="btn"
          onClick={ () => (
            filterByNumericValues(local.column, local.comparison, local.value)) }
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
