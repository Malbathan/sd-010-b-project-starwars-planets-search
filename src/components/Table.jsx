import React, { useContext } from 'react';
// import PlanetProvider from '../context/PlanetProvider';
import PlanetContext from '../context/PlanetContext';
// import Header from './Header';

function Table() {
  const { planets, nameFilter: { filter: { filterByName: { name } } },
    setFilterByName } = useContext(PlanetContext);
  console.log(planets);

  const dataOfPlanets = planets.filter((planet) => planet.name.includes(name));

  if (planets.length > 0) {
    return (
      <div>
        <h1>StarWars Planets</h1>
        <input
          type="text"
          data-testid="name-filter"
          value={ name }
          onChange={ (event) => setFilterByName({
            filter: { filterByName: {
              name: event.target.value,
            },
            },
          }) }
        />
        {/* <Header /> */}
        <table>
          <thead>
            <tr>
              {Object.keys(planets[0]).map((planet, index) => (
                <th key={ index }>{planet}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataOfPlanets.map((planet, index) => (
              <tr key={ index }>
                <td key={ index }>{ planet.name}</td>
                <td key={ index }>{planet.rotation_period}</td>
                <td key={ index }>{planet.orbital_period}</td>
                <td key={ index }>{planet.diameter}</td>
                <td key={ index }>{planet.climate}</td>
                <td key={ index }>{planet.gravity}</td>
                <td key={ index }>{planet.terrain}</td>
                <td key={ index }>{planet.surface_water}</td>
                <td key={ index }>{planet.population}</td>
                <td key={ index }>{planet.films}</td>
                <td key={ index }>{planet.created}</td>
                <td key={ index }>{planet.edited}</td>
                <td key={ index }>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return 'loading';
}
export default Table;
// https://www.pluralsight.com/guides/dynamic-tables-from-editable-columns-in-react-html
