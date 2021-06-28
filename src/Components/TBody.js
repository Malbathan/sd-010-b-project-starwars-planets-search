import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';
import FetchAPI from '../services/FetchAPI';

// Usei o repositorio da Alessandra Rosa Resende como base
// devido a organização e estrutura bem definida
// de fato, me ajudou muito a compreender bem melhor cada funcionamento do contextAPI
// fonte: https://github.com/tryber/sd-010-b-project-starwars-planets-search/tree/alessandra-rezende-project-starwars

export default function TBody() {
  const { results } = FetchAPI();

  // chama o estado do context
  const {
    newPlanets,
    setNewPlanets,
    planets,
    setPlanets,
    filters,
  } = useContext(SWContext);

  useEffect(() => {
    const { name } = filters.filterByName;
    const { column, comparison, value } = filters.filterByNumericValues[0];

    const filterByName = (name)
      ? planets
        .filter((planet) => (planet.name).toLowerCase().includes(name)) : planets;

    const filterByNumericValues = filterByName.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return (planet[column] > value);
      case 'menor que':
        return (planet[column] < value);
      case 'igual a':
        return (planet[column] === value);
      default:
        return planet;
      }
    });
    setNewPlanets(filterByNumericValues);
  }, [planets, filters.filterByName, filters.filterByNumericValues, setNewPlanets]);

  // const filterByNumericValues = filterByName.filter((planet) => {
  //   switch (comparison) {
  //   case 'maior que': return parseFloat(planet[column]) > parseFloat(value);
  //   case 'menor que': return parseFloat(planet[column]) < parseFloat(value);
  //   case 'igual a': return parseFloat(planet[column]) === parseFloat(value);
  //   default: return planet;
  //   }
  // });

  // remover key 'residents' da lista
  if (results) {
    results.map((planet) => delete planet.residents);
    setPlanets(results);
  }

  let tHead = [];
  if (planets.length > 0) {
    tHead = Object.keys(planets[0]);
  }

  return (
    (planets
      ? (
        <table className="App table">
          <thead>
            <tr>
              {tHead.map((title, i) => (
                <th key={ i }>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {newPlanets.map((planet) => (
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
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
      : null
    )
  );
}
