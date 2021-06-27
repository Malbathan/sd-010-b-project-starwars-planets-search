import React, { useContext, useState, useEffect } from 'react';
import SWContext from '../context/SWContext';
import FetchAPI from '../services/FetchAPI';

// Usei o repositorio da Alessandra Rosa Resende como base p/ a função de filtragem
// devido a organização e estrutura bem definida
// de fato, me ajudou muito a compreender bem melhor cada funcionamento do contextAPI
// fonte: https://github.com/tryber/sd-010-b-project-starwars-planets-search/tree/alessandra-rezende-project-starwars

export default function TBody() {
  // chama a lista de plantas da API
  const { results } = FetchAPI();

  // chama o estado do context p/ armazenar e filtrar a lista da API
  const { planets, setPlanets, filters } = useContext(SWContext);

  // estado criado pra armazenar a lista filtrada
  const [newPlanets, setNewPlanets] = useState(planets);

  useEffect(() => {
    const { name } = filters.filterByName;
    const fliteredList = (name)
    // filtra a lista baseado no texto vindo do estado 'filters'
      ? planets
        .filter((planet) => (planet.name).toLowerCase().includes(name)) : planets;
    // seta a lista filtrada no estado deste component
    setNewPlanets(fliteredList);
    // dependencias que, caso mudem, reativam a função
  }, [planets, filters.filterByName]);

  // condicional criada p/ remover a key residents da lista
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
