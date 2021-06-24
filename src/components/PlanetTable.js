import React, { useContext } from 'react';
import arrayHeadTable from '../services/arrayHeaderTable';
import planetsContext from '../contextAPI/planetsContext';

function PlanetTable() {
  const { planets: { planets } } = useContext(planetsContext);
  const headerTable = () => (
    <thead>
      <tr>
        {
          arrayHeadTable.map((element, index) => {
            return (<th key={ index }>{ element }</th>);
          })
        }
      </tr>
    </thead>
  );

  const bodyTable = () => {
    const element = planets.map(({
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
    }, index) => (
      <tr key={ index }>
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
      </tr>
    ));

    return (
      <tbody>
        { element }
      </tbody>
    );
  };

  return (
    <main>
      <table>
        { headerTable() }
        { bodyTable() }
      </table>
    </main>
  );
}

export default PlanetTable;
