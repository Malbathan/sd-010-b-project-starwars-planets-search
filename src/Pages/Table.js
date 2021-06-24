import React, { useContext } from 'react';

import contextSauder from '../context/context';

function Table() {
  const { responseAPI, handleChangePlanet,
    changefilteredByNumber, handleButtonFilterClick,
    filters: { filterByName: { name } } } = useContext(contextSauder);

  return (
    <div>
      <input data-testid="name-filter" onChange={ handleChangePlanet } />
      <select
        name="column"
        id=""
        data-testid="column-filter"
        onChange={ changefilteredByNumber }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        id=""
        data-testid="comparison-filter"
        onChange={ changefilteredByNumber }
        // value={ filters.comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="number"
        data-testid="value-filter"
        onChange={ changefilteredByNumber }
        // value={ filters.number }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleButtonFilterClick }
      >
        Filtrar
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {responseAPI.filter((filter) => filter.name.includes(name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
