import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function TableBody() {
  const { data } = useContext(PlanetsContext);

  return (
    <tbody>
      { Object.keys(data).map((
        { index,
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
        },
      ) => (
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
      )) }
    </tbody>
  );
}

export default TableBody;
