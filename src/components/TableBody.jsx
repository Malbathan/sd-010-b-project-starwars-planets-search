import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function TableBody() {
  const { data } = useContext(PlanetsContext);
  console.log(data);
  console.log(Object.keys(data));

  return (
    <tbody>
      { data.results.map((
        { name,
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
        <tr key={ name }>
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

// Agradecimentos especiais à Mariana Mohr, que me ajudou a fazer o map desse requisito que eu fiquei travado por muuito tempo. Valeuuuu Mari!

export default TableBody;
