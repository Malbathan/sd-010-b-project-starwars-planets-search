import React, { useContext } from 'react';
import SearchContext from '../contexts/SearchContext';

function Table() {
  const { search, searchField, filteredPlanets } = useContext(SearchContext);

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        value={ search }
        placeholder="Nome do planeta"
        onChange={ searchField }
      />
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>residents</th>
            <th>films</th>
            <th>created</th>
            <th>url</th>
          </tr>
        </thead>
        {filteredPlanets.map((planet) => (
          <tbody key={ planet.name }>
            <tr>
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
              <td>{planet.url}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Table;
