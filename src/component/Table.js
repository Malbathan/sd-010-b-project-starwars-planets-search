import React, { useContext, useEffect } from 'react';
// import React from 'react';
import StarWarsContext from '../context/StarWarsContext';
import getAPI from '../service/api';

export default function Table() {
  const { data, setData } = useContext(StarWarsContext);

  async function fetchApi() {
    const planets = await getAPI();
    planets.map((planet) => delete planet.residents);
    setData(planets);
  }

  useEffect(() => { fetchApi(); });

  // const test = [
  //   {
  //     name: 'Tatooine',
  //     population: '200000',
  //     terrain: 'desert',
  //   },
  //   {
  //     name: 'Yavin IV',
  //     population: '4000',
  //     terrain: 'jungle, rainforests',
  //   },
  // ];

  return (
    <table>
      <tr>
        {Object.keys(data[0]).map((el) => <th key={ el }>{el}</th>)}
      </tr>
      {/* {Object.values(...data).map((val, i) => <td key={ i }>{val}</td>)} */}
      {data.map((planet) => (
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
        </tr>))}
    </table>
  );
}
