import React, { useContext } from 'react';
import { sortByName, sortByValues } from '../aux/auxFuncs';
import PlanetsContext from '../context/PlanetsContext';
import Filters from './Filters';

function Planets() {
  const {
    planets,
    filters: {
      filterByName: { name: nameFilter },
      filterByValue,
      order,
    },
  } = useContext(PlanetsContext);

  const filterFromContext = (planet) => {
    if (filterByValue.length === 0) return planet;
    const { column, comparison, value } = filterByValue[filterByValue.length - 1];
    const comparisonValue = parseFloat(planet[column]);
    switch (comparison) {
    case 'maior que':
      return comparisonValue > value;

    case 'menor que':
      return comparisonValue < value;

    case 'igual a':
      return comparisonValue === value;

    default:
      return planet;
    }
  };

  if (Object.keys(order)) {
    planets.sort((a, b) => {
      const { column } = order;
      if (column === 'name') return sortByName(a, b, order);
      return sortByValues(a, b, order);
    });
  }

  return (
    <div>
      <Filters />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>Films</th>
            <th>created</th>
            <th>edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {planets.length > 0
            && planets
              .filter((planet) => (nameFilter
                ? planet.name.includes(nameFilter)
                : planet))
              .filter((planet) => filterFromContext(planet))
              .map(
                ({
                  name,
                  rotation_period: rotationPeriod,
                  orbital_period: orbitalPeriod,
                  diameter,
                  climate,
                  gravity,
                  terrain,
                  surface_water: surfaceWater,
                  population,
                  films,
                  created,
                  edited,
                  url,
                }) => (
                  <tr key={ name }>
                    <td data-testid="planet-name">{name}</td>
                    <td>{rotationPeriod}</td>
                    <td>{orbitalPeriod}</td>
                    <td>{diameter}</td>
                    <td>{climate}</td>
                    <td>{gravity}</td>
                    <td>{terrain}</td>
                    <td>{surfaceWater}</td>
                    <td>{population}</td>
                    <td>
                      {films.map((film, i) => (
                        <p key={ i }>
                          <a href={ film }>
                            {`Filme ${i + 1}`}
                          </a>
                        </p>
                      ))}
                    </td>
                    <td>
                      {`${edited.match(/\d*:\d*/)}
                    ${created.match(/^\d*-\d*-\d*/)[0].split('-').reverse().join('/')}`}
                    </td>
                    <td>
                      {`${edited.match(/\d*:\d*/)}
                    ${edited.match(/^\d*-\d*-\d*/)[0].split('-').reverse().join('/')}`}
                    </td>
                    <td>
                      <a href={ url }>
                        {`Link to ${name}`}
                      </a>

                    </td>
                  </tr>
                ),
              )}
        </tbody>
      </table>
    </div>
  );
}

export default Planets;
