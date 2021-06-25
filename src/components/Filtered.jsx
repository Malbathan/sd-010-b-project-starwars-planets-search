import React, { useContext } from 'react';
import planContext from '../context/planContext';

function Filtered() {
  const { filtered } = useContext(planContext);

  return (
    <div>
      <label htmlFor="fil">
        Pesquisa:
        {' '}
        <input
          type="text"
          id="fil"
          name="filterByName"
          data-testid="name-filter"
          onChange={ (e) => filtered(e.target) }
        />
      </label>
      <select data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input data-testid="value-filter" type="number" />
      <button type="button" data-testid="button-filter">Numero</button>
    </div>
  );
}
export default Filtered;
