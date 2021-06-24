import React, { useContext } from 'react';
//
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>Films</th>
          <th>edited</th>
          <th>Gravity</th>
          <th>Orbital_period</th>
          <th>Population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet) => (

          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.films}</td>
            <td>{planet.edited}</td>
            <td>{planet.gravity}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
