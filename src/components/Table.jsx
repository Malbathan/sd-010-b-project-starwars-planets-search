import React, { useEffect, useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, fetchAPI } = useContext(PlanetContext);
  // states
  useEffect(fetchAPI, []);

  const [name, setName] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  // functions
  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  // render
  return (
    <div>
      <label htmlFor="name-filtre">
        filtre por nome
        <input
          type="text"
          id="name-filtre"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>name</th>
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
          {data.map(({
            name: namePlanet,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            created,
            edited,
            url,
          }, index) => (
            <tr key={ index }>
              <td>{ namePlanet }</td>
              <td>{ rotationPeriod }</td>
              <td>{ orbitalPeriod }</td>
              <td>{ diameter }</td>
              <td>{ climate }</td>
              <td>{ gravity }</td>
              <td>{ terrain }</td>
              <td>{ surfaceWater }</td>
              <td>{ population }</td>
              <td>{ created }</td>
              <td>{ edited }</td>
              <td>{ url }</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
