import React, { useState } from 'react';

function Filtros() {
  const [nameFilter, setNameFilter] = useState('');
  const [selectCategoryFilter, setSelectCategoryFilter] = useState('');
  const [comparisionFilter, setComparisionFilter] = useState('');
  const [numberFilter, setNumberFilter] = useState('');

  function createNameFilter() {
    return (
      <div>
        <input
          value={ nameFilter }
          data-testid="name-filter"
          type="text"
          onChange={ (e) => setNameFilter(e.target.value) }
        />
      </div>
    );
  }

  function createSelectCategoryFilter() {
    return (
      <div>
        <label htmlFor="selectCategory">
          <select
            value={ selectCategoryFilter }
            data-testid="column-filter"
            name="selectCategory"
            id="selectCategory"
            onChange={ (e) => setSelectCategoryFilter(e.target.value) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
      </div>
    );
  }

  function createSelectComparisionFilter() {
    return (
      <div>
        <label htmlFor="selectComparision">
          <select
            value={ comparisionFilter }
            data-testid="comparison-filter"
            name="selectComparision"
            id="selectComparision"
            onChange={ (e) => setComparisionFilter(e.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
      </div>
    );
  }

  function createNumberFilter() {
    return (
      <div>
        <input
          value={ numberFilter }
          data-testid="value-filter"
          type="number"
          onChange={ (e) => setNumberFilter(e.target.value) }
        />
      </div>
    );
  }

  return (
    <div className="filtros">
      { createNameFilter() }
      { createSelectCategoryFilter() }
      { createSelectComparisionFilter() }
      { createNumberFilter() }
    </div>
  );
}

export default Filtros;
