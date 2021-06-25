import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { planets } = useContext(TableContext);

  const tableHead = () => {
    if (planets) {
      const keys = Object.keys(planets[0]);
      const arrayObject = keys.filter((key) => key !== 'residents');
      return arrayObject.map((plan) => (
        <th key={ plan }>{plan}</th>
      ));
    }
  };

  const tableBody = () => {
    if (planets) {
      return planets.map((planet, index) => (
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
      ));
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {tableHead()}
        </tr>
      </thead>
      <tbody>
        {tableBody()}
      </tbody>
    </table>
  );
}

export default Table;
