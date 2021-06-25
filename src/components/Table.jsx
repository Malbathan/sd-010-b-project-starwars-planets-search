import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

const nameColumns = ['name',
  'rotation_period', 'orbital_period',
  'diameter', 'climate',
  'gravity', 'terrain',
  'population', 'surface_water',
  'films', 'created',
  'edited', 'url'];

function Table() {
  const { planetsStarWars,
    name: { filters: { filterByName: { name } } } } = useContext(StarWarsContext);

  const { column: { filters: { filterByNumericValues } } } = useContext(StarWarsContext);
  const { column } = filterByNumericValues[0];

  function renderTableHeader() {
    const columns = (column ? nameColumns
      .filter((nameColumn) => nameColumn === column) : nameColumns);

    return (
      <thead>
        <tr>
          {
            columns.map((item, index) => <th key={ index }>{item}</th>)
          }
        </tr>
      </thead>
    );
  }

  function renderTableBody() {
    const planets = (name ? planetsStarWars.filter((planet) => planet.name.includes(name))
      : planetsStarWars);

    return (
      <tbody>
        {
          planets.filter((planet) => planet.name.includes(name))
            .map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.population}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
        }
      </tbody>
    );
  }

  function renderTableFilteredColumn() {
    const planets = (name ? planetsStarWars.filter((planet) => planet.name.includes(name))
      : planetsStarWars);

    const columnsPlanet = () // fazer lógica para filtrar dependendo do valor do column

    return (
      <tbody>
        {
          planets.filter((planet) => planet.name.includes(name))
            .map((planet, index) => (
              <tr key={ index } />
            ))
        }
      </tbody>
    );
  }

  return (
    <table>
      {renderTableHeader()}
      {column ? renderTableFilteredColumn() : renderTableBody()}
    </table>
  );
}

export default Table;
