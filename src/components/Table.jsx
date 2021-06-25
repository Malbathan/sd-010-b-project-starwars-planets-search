import React, { useState, useEffect, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  // useState([]) - pega os setPlanets e coloca dentro de planets
  const [planets, setPlanets] = useState([]);
  // useContext() - retorna o valor atual do contexto. O valor de contexto atual é determinado pela prop value
  const { data } = useContext(PlanetContext);

  // didMount -
  useEffect(() => { // função a ser execultada
    if (data.length) {
      const result = Object.keys(data[0]);
      setPlanets(result.filter((key) => key !== 'url'));
    }
  }, [data]); // [data] - array para receber os componentes renderizados

  return (
    <table className="table" border="1">
      <thead>
        <tr>
          {/* https://fb.me/react-warning-keys */}
          {planets.map((key) => <th key={ key }>{key}</th>)}
        </tr>
        {data.map((results) => (
          <tr key={ results.name }>
            <td>{results.name}</td>
            <td>{results.rotation_period}</td>
            <td>{results.orbital_period}</td>
            <td>{results.diameter}</td>
            <td>{results.climate}</td>
            <td>{results.gravity}</td>
            <td>{results.terrain}</td>
            <td>{results.surface_water}</td>
            <td>{results.population}</td>
            <td>{results.residents}</td>
            <td>{results.films}</td>
            <td>{results.created}</td>
            <td>{results.edited}</td>
          </tr>
        ))}
      </thead>
    </table>
  );
}

export default Table;
// obitive ajuda do Raphael Gumieri
