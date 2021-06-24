import React, { useEffect, useState } from 'react';
import fetchStarWars from '../services/starwarsAPI';

function Table() {
  const [data, setData] = useState([]);
  // compenetDidMount
  useEffect(() => {
    // console.log('aqui');
    const getStarWarsPlanets = async () => {
      const dados = await fetchStarWars();
      // console.log(dados);
      setData(dados);
    };

    getStarWarsPlanets();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {data.length > 0
          && (Object.keys(data[0]).map((element) => element !== 'residents'
          && <th>{element}</th>))}
        </tr>
      </thead>
      <tbody>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
