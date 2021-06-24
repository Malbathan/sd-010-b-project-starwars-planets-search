import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Planets() {
  const { data, loading } = useContext(StarWarsContext);

  const renderTable = () => (
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
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet) => (
          <tr key={ planet.name }>
            <th>{planet.name}</th>
            <th>{planet.rotation_period}</th>
            <th>{planet.orbital_period}</th>
            <th>{planet.diameter}</th>
            <th>{planet.climate}</th>
            <th>{planet.gravity}</th>
            <th>{planet.terrain}</th>
            <th>{planet.surface_water}</th>
            <th>{planet.population}</th>
            <th>{planet.films}</th>
            <th>{planet.created}</th>
            <th>{planet.edited}</th>
            <th>{planet.url}</th>
          </tr>))}
      </tbody>
    </table>
  );

  return (
    <div>
      {loading ? <h1>olá star war</h1> : <h1>Carregando</h1>}

      {console.log(data)}

      {renderTable()}

    </div>
  );
}

export default Planets;
