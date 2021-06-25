import React, { useContext } from 'react';

import TableContext from '../context/TableContext';

function TablePlanets() {
  const { data, titles } = useContext(TableContext);

  return (
    <section>
      <table border="1">
        <thead>
          <tr>
            {titles.map((title) => <th key={ title }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((planets, index) => (
            <tr key={ index }>
              <td>{planets.name}</td>
              <td>{planets.rotation_period}</td>
              <td>{planets.orbital_period}</td>
              <td>{planets.diameter}</td>
              <td>{planets.climate}</td>
              <td>{planets.gravity}</td>
              <td>{planets.terrain}</td>
              <td>{planets.surface_water}</td>
              <td>{planets.population}</td>
              <td>{planets.films}</td>
              <td>{planets.created}</td>
              <td>{planets.edited}</td>
              <td>{planets.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TablePlanets;
