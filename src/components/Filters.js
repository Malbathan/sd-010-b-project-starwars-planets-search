import React, { useContext, useState } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

export default function Filters() {
  const {
    handleNameFilter,
    filters,
    filterByValues,
    setFilter,
  } = useContext(StarWarsContext);
  const [local, setLocalFilter] = useState(
    { column: 'population', comparison: 'maior que', value: 0 },
  );

  const nameFilter = filters.filterByName.name;
  const [isHidden, setHidden] = useState(
    { population: false,
      orbital_period: false,
      diameter: false,
      rotation_period: false,
      surface_water: false,
    },
  );

  function handleLocalStates({ target }) {
    const { id, value } = target;
    setLocalFilter({ ...local, [id]: value });
  }

  const { column, comparison } = local;
  function handleBtnClick() {
    filterByValues({
      column,
      comparison,
      value: local.value,
    });
    setHidden({ ...isHidden[column] = true, ...isHidden });
  }

  function handleFilterRemoval(e) {
    e.preventDefault();
    setFilter({ ...filters, filterByNumericValues: [] });
    setHidden({ population: false,
      orbital_period: false,
      diameter: false,
      rotation_period: false,
      surface_water: false,
    });
  }

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
          onChange={ (e) => handleLocalStates(e) }
        >
          <option hidden={ isHidden.population }>population</option>
          <option hidden={ isHidden.orbital_period }>orbital_period</option>
          <option hidden={ isHidden.diameter }>diameter</option>
          <option hidden={ isHidden.rotation_period }>rotation_period</option>
          <option hidden={ isHidden.surface_water }>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          value={ comparison }
          id="comparison"
          onChange={ (e) => handleLocalStates(e) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
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
          onClick={ handleBtnClick }
          data-testid="button-filter"
          type="button"
        >
          {' '}
          Send Comparison
        </button>
        {filters.filterByNumericValues.length - 1 > 0 && (
          <button
            type="button"
            onClick={ (e) => handleFilterRemoval(e) }
            data-testid="filter"
          >
            x

          </button>)}
      </label>
    </form>
  );
}
