import React from 'react';

function FilterSelects() {
  return (
    <div>
      <label htmlFor="column">
        <select name="column" data-testid="column">
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select name="comparison" data-testid="comparison-filter">
          <option value="maior">maior que</option>
          <option value="menor">menor que</option>
          <option value="igual">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input type="number" name="value" data-testid="value-filter" />
      </label>
      <button type="button">Filtrar</button>
    </div>
  );
}

export default FilterSelects;
