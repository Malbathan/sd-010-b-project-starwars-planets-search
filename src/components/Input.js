import React, { useContext } from 'react';
import { Context } from '../contexts';

function Input() {
  const { input, setInput } = useContext(Context);
  return (
    <>
      <label htmlFor="name">
        <input
          data-testid="name-filter"
          id="name"
          type="text"
          value={ input }
          onChange={ ({ target }) => setInput(target.value) }
        />
      </label>
      <label htmlFor="column">
        <select data-testid="column-filter" id="column">
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </label>
    </>
  );
}

export default Input;
