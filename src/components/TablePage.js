import React, { useContext } from 'react';
import TableContext from '../context/tableContext';

function Table() {
  const { data } = useContext(TableContext);
  // console.log(data);

  if (data.length === 0) {
    return <h1>Loding...</h1>;
  }
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((planet, index) => <th key={ index }>{planet}</th>)}
        </tr>
      </thead>
      <tbody>
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
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
