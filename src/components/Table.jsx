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
      filterByNumericValues: [{ column, comparison, value }],
    },
  } = filterPlanetsByName;

  return (
    <div>
      <Header />
      <table>
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
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((filter) => {
            const includesName = filter.name.includes(name);
            const localFilter = compare[comparison](
              filter[column], (value),
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
              <tr key={ population }>
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
