import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filter } = useContext(StarWarsContext);
  console.log(data);
  const thirteenColumns = [
    'name',
    'rotationPeriod',
    'orbitalPeriod',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surfaceWater',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  const showFilteredPlanets = (filter === [] ? data : filter);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {thirteenColumns.map((item, index) => (
              <th key={ index }>{item}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {showFilteredPlanets.map((item, index) => (
            <tr key={ index }>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>{item.films}</td>
              <td>{item.created}</td>
              <td>{item.edited}</td>
              <td>{item.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
