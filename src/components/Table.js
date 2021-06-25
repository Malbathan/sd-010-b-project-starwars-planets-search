import React, { useContext, useEffect, useState } from 'react';
import context from '../Context/Context';
import generateKey from '../services/generateIndex';

function Table() {
  const { data: apiContext } = useContext(context);
  const [keys, setKeys] = useState([]);
  // const mapeado = apiContext.map((item) => Object.values(item));
  useEffect(() => {
    if (apiContext.length) {
      setKeys(Object.keys(apiContext[0]));
    }
  }, [apiContext]);
  return (
    <table>
      <thead>
        <tr>
          {keys.map((item) => <th key={ generateKey() }>{item}</th>) }
        </tr>
      </thead>
      <tbody>
        {apiContext.map((item) => (
          <tr key={ generateKey() }>
            <td>{item.name}</td>
            <td>{item.rotation_period}</td>
            <td>{item.orbital_period}</td>
            <td>{item.diameter}</td>
            <td>{item.climate}</td>
            <td>{item.gravity}</td>
            <td>{item.terrain}</td>
            <td>{item.surface_water}</td>
            <td>{item.population}</td>
            <td>{item.films}</td>
            <td>{item.created}</td>
            <td>{item.edited}</td>
            <td>{item.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
