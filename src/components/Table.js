import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWars';

function Table() {
  const { data, handleChange, searchName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="searchName">
        <input
          data-testid="name-filter"
          id="searchName"
          onChange={ handleChange }
        />
      </label>

      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Surface Water</th>
            <th>Gravity</th>
            <th>Created</th>
            <th>Crimate</th>
            <th>Terrain</th>
            <th>Diameter</th>
            <th>Films</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((object) => object.name.includes(searchName))
            .map((item) => (
              <tr key={ item.name }>
                <td>{item.name}</td>
                <td>{item.population}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.surface_water}</td>
                <td>{item.gravity}</td>
                <td>{item.created}</td>
                <td>{item.climate}</td>
                <td>{item.terrain}</td>
                <td>{item.diameter}</td>
                <td>{item.films}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
