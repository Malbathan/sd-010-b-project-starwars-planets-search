import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Header from './Header';

const compare = {
  'maior que': (a, b) => a > b,
  'menor que': (a, b) => a < b,
  'igual a': (a, b) => a === b,
};

function Table() {
  const {
    data,
    filterPlanetsByName,
  } = useContext(PlanetsContext);

  const { filters:
    {
      filterByName: { name },
      filterByNumericValues: [{ column, comparison, number }],
    },
  } = filterPlanetsByName;

  return (
    <div>
      <Header />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((filter) => {
            const includesName = filter.name.includes(name);
            const localFilter = compare[comparison](
              Number(filter[column]),
              Number(number),
            );
            return includesName && localFilter;
          })
            .map(({
              name: namePlanet,
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
              <tr key={ namePlanet }>
                <td>{ namePlanet }</td>
                <td>{ rotationPeriod }</td>
                <td>{ orbitalPeriod }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ surfaceWater }</td>
                <td>{ population }</td>
                <td>{ films }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
                <td>{ url }</td>
              </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
