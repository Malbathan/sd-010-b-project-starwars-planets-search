import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { data } = useContext(AppContext);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (data.length) {
      const allKey = Object.keys(data[0]);
      setKeys(allKey.filter((key) => key !== 'residents'));
    }
  }, [data]);

  // console.log(keys);
  return (
    <table border="1px">
      <tr>
        {keys.map((key) => (
          <th key={ key }>
            {key}
          </th>
        ))}
      </tr>
      {data.map((planet, index) => (
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
      ))}
    </table>
  );
}

export default Table;

// Agradecimentos Turma 10-B a Daniel Roberto, Raphael Gumieri, Lucas Martins
