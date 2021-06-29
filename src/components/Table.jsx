import React, { useContext } from 'react';
// import PlanetProvider from '../context/PlanetProvider';
import PlanetContext from '../context/PlanetContext';
import Header from './Header';

function Table() {
  const { planets } = useContext(PlanetContext);

  const { filters: { filter: {
    filterByName: { name } } } } = useContext(PlanetContext);

  const { numericFilter: { filter: {
    filterByNumericValues: [{ comparisson,
      value, column }] } } } = useContext(PlanetContext);

  const dataOfPlanets = planets.filter((planet) => planet.name.includes(name));

  const filterByNumber = () => {
    if (value.length > 1) {
      console.log(comparisson,
        value, column);
      if (comparisson === 'maior que') {
        return planets.filter((planet) => parseInt(planet[column], 10)
         > parseInt(value, 10));
      }
      if (comparisson === 'menor que') {
        return planets.filter((planet) => parseInt(planet[column], 10)
         < parseInt(value, 10));
      }
      if (comparisson === 'igual a') {
        return planets.filter((planet) => parseInt(planet[column], 10)
         === parseInt(value, 10));
      }
    } return dataOfPlanets;
  };

  if (planets.length > 0) {
    return (
      <div>
        <h1>StarWars Planets</h1>
        <Header />
        <table>
          <thead>
            <tr>
              {Object.keys(planets[0]).map((planet, index) => (
                <th key={ index }>{planet}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterByNumber().map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
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
