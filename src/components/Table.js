import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);

  return (
    <div>
      <table>
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
        {
          data.map((res) => (
            <tr key={ res.name }>
              <td>{res.name}</td>
              <td>{res.rotation_period}</td>
              <td>{res.orbital_period}</td>
              <td>{res.diameter}</td>
              <td>{res.climate}</td>
              <td>{res.gravity}</td>
              <td>{res.terrain}</td>
              <td>{res.surface_water}</td>
              <td>{res.population}</td>
              <td>{res.films}</td>
              <td>{res.created}</td>
              <td>{res.edited}</td>
              <td>{res.url}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

export default Table;
