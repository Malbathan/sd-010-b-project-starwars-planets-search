import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function renderPlanets(planet, index) {
  return (
    <tr key={ index }>
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
}

const TableContent = () => (

  <StarWarsContext.Consumer>
    {
      ({ filteredPlanets }) => filteredPlanets.map(renderPlanets)
    }
  </StarWarsContext.Consumer>
);

export default TableContent;
