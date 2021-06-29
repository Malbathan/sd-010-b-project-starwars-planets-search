import React, { useContext } from 'react';
import planContext from '../context/planContext';

function Table() {
  const { data, arrayFiltered, filters } = useContext(planContext);

  const planets = (planet) => (
    <tr key={ planet.name }>
      <td>{planet.name}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.diameter}</td>
      <td>{planet.climate}</td>
      <td>{planet.gravity}</td>
      <td>{planet.terrain}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.population}</td>
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  );
    // ajuda colega de classe Henrique Clementino  ;
  const filterName = () => data
    .filter((planet) => planet.name.toLowerCase()
      .includes(filters.filterByName.name.toLowerCase()))
    .map(planets);

  const filterNumber = () => arrayFiltered
    .map(planets);

  return (
    data.length > 0
      ? (
        <table border="1">
          <thead>
            <tr>
              <th>name</th>
              <th>rotation_period</th>
              <th>orbital_period</th>
              <th>diameter</th>
              <th>climate</th>
              <th>gravity</th>
              <th>terrain</th>
              <th>surface_water</th>
              <th>population</th>
              <th>films</th>
              <th>created</th>
              <th>edited</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody>
            {!arrayFiltered.length ? filterName() : filterNumber()}
          </tbody>
        </table>) : <div>Loading</div>
  );
}

export default Table;
