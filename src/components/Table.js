import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation_period</th>
          <th>Orbital_period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface_water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planets, index) => (
          <tr key={ index }>
            <td>{planets.name}</td>
            <td>{planets.rotation_period}</td>
            <td>{planets.orbital_period}</td>
            <td>{planets.diameter}</td>
            <td>{planets.climate}</td>
            <td>{planets.gravity}</td>
            <td>{planets.terrain}</td>
            <td>{planets.surface_water}</td>
            <td>{planets.population}</td>
            <td>{planets.films}</td>
            <td>{planets.created}</td>
            <td>{planets.edited}</td>
            <td>{planets.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
