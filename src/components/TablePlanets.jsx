import React, { useContext } from 'react';

import TableContext from '../context/TableContext';
import FilterByName from './FilterByName';
import FilterByNumber from './FilterByNumber';

function TablePlanets() {
  const { data, titles, filters: { filterByName: { name } } } = useContext(TableContext);

  return (
    <section>
      <FilterByName />
      <FilterByNumber />
      <table border="1">
        <thead>
          <tr>
            {titles.map((title) => <th key={ title }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {/* filter com ajuda do Edu */}
          {data.filter((planet) => (planet.name.includes(name)))
            .map((planets, index) => (
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
