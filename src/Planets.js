/* eslint-disable camelcase */
import React, { useContext } from 'react';
import PlanetsContext from './context/PlanetsContext';

function Planets() {
  const { planets } = useContext(PlanetsContext);
  return planets.length && (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Rotation period</th>
          <th>Orbital period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface water</th>
          <th>Population</th>
          <th>Residents</th>
          <th>Films</th>
          <th>Url</th>
        </tr>
        {planets.map(
          ({
            name,
            rotation_period,
            orbital_period,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water,
            population,

            films,
            url,
          }) => (
            <tr key={ name }>
              <th>{name}</th>
              <th>{rotation_period}</th>
              <th>{orbital_period}</th>
              <th>{diameter}</th>
              <th>{climate}</th>
              <th>{gravity}</th>
              <th>{terrain}</th>
              <th>{surface_water}</th>
              <th>{population}</th>
              <th>{films.length}</th>
              <th>{url}</th>
            </tr>
          ),
        )}
      </table>
    </div>
  );
}

export default Planets;
