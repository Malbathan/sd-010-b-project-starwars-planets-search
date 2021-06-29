import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, filter, planetsFilter } = useContext(PlanetContext);
  const result = filter.filterByName.name.length === 0 ? data : planetsFilter;
  if (data === undefined) {
    return (
      <p>carregando</p>
    );
  }
  return (
    <table>
      <tr>
        <th>nome</th>
        <th>rotação</th>
        <th>orbita</th>
        <th>diametro</th>
        <th>clima</th>
        <th>gravidade</th>
        <th>terreno</th>
        <th>superficie </th>
        <th>população</th>
        <th>filmes</th>
        <th>criado</th>
        <th>editado</th>
        <th>url</th>
      </tr>
      {result.map((planet) => (
        <tr key={ planet.name }>
          <td>{ planet.name }</td>
          <td>{ planet.rotation_period }</td>
          <td>{ planet.orbital_period }</td>
          <td>{ planet.diameter }</td>
          <td>{ planet.climate }</td>
          <td>{ planet.gravity}</td>
          <td>{ planet.terrain }</td>
          <td>{ planet.surface_water }</td>
          <td>{ planet.population }</td>
          <td>{ planet.films }</td>
          <td>{ planet.created }</td>
          <td>{ planet.edited }</td>
          <td>{ planet.url }</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
