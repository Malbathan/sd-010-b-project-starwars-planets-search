import React, { useContext, useEffect, useState } from 'react';
import planetsContext from '../contextAPI/planetsContext';

function PlanetTable() {
  const { planets: { planets } } = useContext(planetsContext);
  const headerTable = () => (
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
        <th>{ name }</th>
        <th>{ rotationPeriod }</th>
        <th>{ orbitalPeriod }</th>
        <th>{ diameter }</th>
        <th>{ climate }</th>
        <th>{ gravity }</th>
        <th>{ terrain }</th>
        <th>{ surfaceWater }</th>
        <th>{ population }</th>
        <th>{ films }</th>
        <th>{ created }</th>
        <th>{ edited }</th>
        <th>{ url }</th>
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
