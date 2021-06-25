import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

const filteredColumns = [
  'rotation_period', 'orbital_period',
  'diameter', 'climate',
  'gravity', 'terrain',
  'population', 'surface_water',
  'films', 'created',
  'edited', 'url'];

const fixedColumn = ['name'];

function Table() {
  const { planetsStarWars,
    name: { filters: { filterByName: { name } } } } = useContext(StarWarsContext);

  const { column: { filters: { filterByNumericValues } } } = useContext(StarWarsContext);
  const { column } = filterByNumericValues[0];

  function renderTableHeader() {
    const columnFiltered = (column ? filteredColumns
      .filter((nameColumn) => nameColumn === column) : filteredColumns);

    return (
      <thead>
        <tr>
          <th>{fixedColumn[0]}</th>
          {
            columnFiltered.map((item, index) => (
              <th key={ index }>{item}</th>
            ))
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
        { column
          ? (
            planets.filter((planet) => planet.name.includes(name))
              .map((planet, index) => (
                <tr key={ index }>
                  <td>{planet.name}</td>
                  <td>{planet[column]}</td>
                </tr>
              ))
          )
          : (
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
          )}
      </tbody>
    );
  }

  return (
    <table>
      {renderTableHeader()}
      {renderTableBody()}
    </table>
  );
}

export default Table;
