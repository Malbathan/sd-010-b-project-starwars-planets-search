import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function ContentsTable() {
  const { data } = useContext(StarWarsContext);

  const dadosPlanets = data.map((valueDados, index) => (
    <tr key={ index }>
      <td>{valueDados.name}</td>
      <td>{valueDados.rotation_period}</td>
      <td>{valueDados.orbital_period}</td>
      <td>{valueDados.diameter}</td>
      <td>{valueDados.climate}</td>
      <td>{valueDados.gravity}</td>
      <td>{valueDados.terrain}</td>
      <td>{valueDados.surface_water}</td>
      <td>{valueDados.population}</td>
      <td>{valueDados.films}</td>
      <td>{valueDados.created}</td>
      <td>{valueDados.edited}</td>
      <td>{valueDados.url}</td>
    </tr>
  ));
  return dadosPlanets;
}

export default ContentsTable;
