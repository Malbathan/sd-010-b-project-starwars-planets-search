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
  const { planetsStarWars, isFiltered } = useContext(StarWarsContext);

  const { name: { filters: { filterByName: { name } } } } = useContext(StarWarsContext);

  const { column: { filters: { filterByNumericValues } } } = useContext(StarWarsContext);
  const { column } = filterByNumericValues[0];

  const { comparison: { filters: { filterByNumericValues:
    filterNumericValues } } } = useContext(StarWarsContext);
  const { comparison } = filterNumericValues[0];

  const { value: { filters: { filterByNumericValues:
    filterNumericValuesRename } } } = useContext(StarWarsContext);
  const { value } = filterNumericValuesRename[0];

  let planets = (name ? planetsStarWars.filter((planet) => planet.name.includes(name))
    : planetsStarWars);

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

  function renderDefaultTable() {
    return (
      <tbody>
        { column
          ? (
            planets
              .map((planet, index) => (
                <tr key={ index }>
                  <td>{planet.name}</td>
                  <td>{planet[column]}</td>
                </tr>
              ))
          )
          : (
            planets
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

  function renderTableFiltered() {
    const filteredPlanetsBiggerThen = planets
      .filter((planet) => Number(planet[column]) > Number(value));

    const filteredPlanetsSmallerThen = planets
      .filter((planet) => Number(planet[column]) < Number(value));

    const filteredPlanetsEqualTo = planets
      .filter((planet) => Number(planet[column]) === Number(value));

    if (comparison === 'maior que' && value && column) {
      planets = filteredPlanetsBiggerThen;
    } else if (comparison === 'menor que' && value && column) {
      planets = filteredPlanetsSmallerThen;
    } else {
      planets = filteredPlanetsEqualTo;
    }

    return (
      <tbody>
        {
          planets
            .map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <td>{planet[column]}</td>
              </tr>
            ))
        }
      </tbody>
    );
  }

  return (
    <table>
      {renderTableHeader()}
      {isFiltered ? renderTableFiltered() : renderDefaultTable()}
    </table>
  );
}

export default Table;
