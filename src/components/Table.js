import React from 'react';
import RequisitionAPI from '../api/RequisitionAPI';

function Table() {
  const { results } = RequisitionAPI();
  console.log(results);

  function renderPlanets() {
    if (results) {
      return (
        results.map(({
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
          <tr key={ diameter.toString() }>
            <td key={ name }>{ name }</td>
            <td key={ rotationPeriod }>{ rotationPeriod }</td>
            <td key={ orbitalPeriod }>{ orbitalPeriod }</td>
            <td key={ diameter }>{ diameter }</td>
            <td key={ climate }>{ climate }</td>
            <td key={ gravity }>{ gravity }</td>
            <td key={ terrain }>{ terrain }</td>
            <td key={ surfaceWater }>{ surfaceWater }</td>
            <td key={ population }>{ population }</td>
            <td key={ films }>{ films }</td>
            <td key={ created }>{ created }</td>
            <td key={ edited }>{ edited }</td>
            <td key={ url }>{ url }</td>
          </tr>
        ))
      );
    }
  }

  return (
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>rotationPeriod</th>
          <th>orbitalPeriod</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surfaceWater</th>
          <th>population</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
          <th>films</th>
        </tr>
        { renderPlanets() }
      </table>
    </div>
  );
}

export default Table;
