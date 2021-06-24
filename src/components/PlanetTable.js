import React, { useContext, useEffect, useState } from 'react';
import planetsContext from '../contextAPI/planetsContext';

function PlanetTable() {
  const { planets: { planets } } = useContext(planetsContext);
  console.log(planets)

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

  return (
    <main>
      <table>
        { headerTable() }
      </table>
    </main>
  );
}

export default PlanetTable;
