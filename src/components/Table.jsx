import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { data } = useContext(AppContext);
  return (
    <table>
      <tr>
        <th>Nome</th>
        <th>Rotação</th>
        <th>Orbital</th>
        <th>Diâmetro</th>
        <th>Clima</th>
        <th>Gravidade</th>
        <th>Terreno</th>
        <th>Superfície</th>
        <th>População</th>
        <th>Filme</th>
        <th>Criado</th>
        <th>Editado</th>
        <th>URL</th>
      </tr>
      {data.map((planet) => (
        <tr key={ planet.name }>
          <td>{ planet.name }</td>
          <td>{ planet.rotation_period }</td>
          <td>{ planet.orbital_period }</td>
          <td>{ planet.diameter }</td>
          <td>{ planet.climate }</td>
          <td>{ planet.gravity }</td>
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
