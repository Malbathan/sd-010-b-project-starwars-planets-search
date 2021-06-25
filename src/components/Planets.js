import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Filters from './Filters';

function Planets() {
  const {
    planets,
    filters: {
      filterByName: { name: nameFilter },
      filterByValue,
    },
  } = useContext(PlanetsContext);

  const filterFromContext = (planet) => {
    if (!filterByValue) return planet;
    const { column, comparison, value } = filterByValue;
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
              .filter((planet) => (filterFromContext(planet)))
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
                    <td>{name}</td>
                    <td>{rotationPeriod}</td>
                    <td>{orbitalPeriod}</td>
                    <td>{diameter}</td>
                    <td>{climate}</td>
                    <td>{gravity}</td>
                    <td>{terrain}</td>
                    <td>{surfaceWater}</td>
                    <td>{population}</td>
                    <td>{films}</td>
                    <td>{created}</td>
                    <td>{edited}</td>
                    <td>{url}</td>
                  </tr>
                ),
              )}
        </tbody>
      </table>
    </div>
  );
}

export default Planets;
