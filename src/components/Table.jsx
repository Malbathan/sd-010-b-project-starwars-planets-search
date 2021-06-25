import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

function Table() {
  const { planetsStarWars,
    name: { filters: { filterByName: { name } } } } = useContext(StarWarsContext);

  function renderTableHeader() {
    return (
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>population</th>
          <th>surface_water</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
    );
  }

  const planets = (name ? planetsStarWars.filter((planet) => planet.name.includes(name))
    : planetsStarWars);

  function renderTableBody() {
    return (
      <tbody>
        {
          planets.filter((planet) => planet.name.includes(name))
            .map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.population}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
        }
      </tbody>
    );
  }

  return (
    <table>
      {renderTableHeader()}
      {renderTableBody()}
    </table>
  );
}

export default Table;
