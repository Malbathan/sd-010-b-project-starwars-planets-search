/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link as a } from 'react-router-dom';
import { DataContext } from '../context/PlanetsContext';

export default function Planets() {
  const {
    planets,
    filters: { filterByName: { name },
      filterByNumericValues },
  } = React.useContext(DataContext);

  const {
    column,
    comparison,
    value } = filterByNumericValues[filterByNumericValues.length - 1];

  const filteredPlanets = planets
    .filter((planet) => planet.name.toLowerCase().includes(name))
    .filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return (+planet[column] > +value);
      case 'menor que':
        return (+planet[column] < +value);
      case 'igual a':
        return (+planet[column] === +value);
      default:
        return planet;
      }
    });
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Período da Órbita</th>
          <th>Diametro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criação</th>
          <th>Edição</th>
          <th>Site</th>
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              {planet.films.map((film) => (
                <div key={ film }>
                  <a
                    href={ film }
                  >
                    link
                  </a>
                  <br />
                </div>
              ))}
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
