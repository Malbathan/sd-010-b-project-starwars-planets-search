import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

const { data } = useContext(MyContext);

function tableHead( { data } ) {

}

function TableBody() {
  const planets = data;
  // console.log(planets);
  return (
    <section>
      {planets.map((planet, index) => (
        <tr key={ index }>
          <td>{ planet.name }</td>
          <td>{ planet.orbital_period }</td>
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
    </section>
  );
}

export default Table;
