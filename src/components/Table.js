import React, { useContext } from 'react';
import AppContext from '../AppContext';

function Table() {
  const planets = useContext(AppContext);

  return (
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
          <th>residents</th>
          <th>films</th>
          <th>created</th>
          <th>url</th>
        </tr>
      </thead>
      {planets.map((test) => (
        <tbody key={ test.name }>
          <tr>
            <td>{test.name}</td>
            <td>{test.rotation_period}</td>
            <td>{test.orbital_period}</td>
            <td>{test.diameter}</td>
            <td>{test.climate}</td>
            <td>{test.gravity}</td>
            <td>{test.terrain}</td>
            <td>{test.surface_water}</td>
            <td>{test.population}</td>
            <td>{test.residents}</td>
            <td>{test.films}</td>
            <td>{test.created}</td>
            <td>{test.url}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;
