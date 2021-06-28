import React from 'react';

import useFilters from '../hooks/useFilters';

function TableBodyContent() {
  const {
    planetsStarWars,
    columnFiltered,
    comparison,
    isFiltered,
    namePlanet,
    value,
  } = useFilters();

  const { name } = namePlanet;
  const { column } = columnFiltered;

  const { comparison: comparisonValue } = comparison;
  const { value: numberValue } = value;

  let newPlanets = (name ? planetsStarWars
    .filter((planet) => planet.name.includes(name)) : planetsStarWars);

  function renderFilteredTable() {
    const filteredPlanetsBiggerThen = newPlanets
      .filter((planet) => Number(planet[column]) > Number(numberValue));

    const filteredPlanetsSmallerThen = newPlanets
      .filter((planet) => Number(planet[column]) < Number(numberValue));

    const filteredPlanetsEqualTo = newPlanets
      .filter((planet) => Number(planet[column]) === Number(numberValue));

    if (comparisonValue === 'maior que' && numberValue && column) {
      newPlanets = filteredPlanetsBiggerThen;
    } else if (comparisonValue === 'menor que' && numberValue && column) {
      newPlanets = filteredPlanetsSmallerThen;
    } else {
      newPlanets = filteredPlanetsEqualTo;
    }

    return (
      <tbody>
        {
          newPlanets
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

  function renderDefaultTable() {
    return (
      <tbody>
        { (
          column
            ? (
              newPlanets.map((planet, index) => (
                <tr key={ index }>
                  <td>{planet.name}</td>
                  <td>{planet[column]}</td>
                </tr>
              ))
            )
            : (
              newPlanets
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
            )
        )}
      </tbody>
    );
  }

  return (
    isFiltered ? renderFilteredTable() : renderDefaultTable()
  );
}

export default TableBodyContent;
