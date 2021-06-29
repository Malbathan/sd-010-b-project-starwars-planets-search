import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

import SearchBox from './SearchBox';

function Home() {
  const { planets, tableTitles, filterName } = useContext(PlanetContext);
  const filteredPlanets = planets.filter(
    (planet) => planet.name.toLowerCase().includes(filterName.toLowerCase()));

  function generateTableHeader() {
    return (<>
      <thead>
        <tr>
          { tableTitles.map((title, index) => <th key={ index }>{ title }</th>) }
        </tr>
      </thead>
    </>);
  }

  function generateTableBody() {
    return (
      <tbody>
          { filteredPlanets.map(({ 
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
            url }, index) => ( <tr key={ index }>
          <td>{ name }</td>
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
        </tr>) ) }
      </tbody>);
  }

  return (
    <>
      <SearchBox />
      <table>
        { generateTableHeader() }
        { generateTableBody() }
      </table>
    </>
  )
}

export default Home;