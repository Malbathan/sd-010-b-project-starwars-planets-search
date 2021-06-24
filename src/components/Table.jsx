import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    if (data.length) {
      const allKeys = Object.keys(data[0]);
      setKeys(allKeys.filter((key) => key !== 'url'));
    }
  }, [data]);
  return (
    <table>
      <tr>
        {keys.map((key) => <th key={ key }>{key}</th>)}
      </tr>
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
          <td>{planet.residents}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
        </tr>))}
    </table>
  );
}

export default Table;
