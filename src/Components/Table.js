import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

function Table() {
  const { data } = useContext(MyContext);
  const planets = data;
  // console.log(planets);
  return (
    <tbody>
      {planets.map((planet, index) => (
        <tr key={ index }>
          <td>{ planet.name }</td>
          <td>{ planet.rotation_period }</td>
          <td>{ planet.diameter }</td>
          <td>{ planet.climate }</td>
          <td>{ planet.gravity }</td>
          <td>{ planet.terrain }</td>
          <td>{ planet.surface_water }</td>
          <td>{ planet.population }</td>
          <td>{ planet.films }</td>
          <td>{ planet.created }</td>
          <td>{ planet.edited }</td>
          <td>{ planet.url }</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Table;
