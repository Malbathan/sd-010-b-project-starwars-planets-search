import React, { useContext } from 'react';
import Thead from './Thead';

import { Context } from './Provider/Provider';

// console.log(Context);

const RenderTable = () => {
  // const batata = useContext(Context);
  // const { planetName, data } = useContext(Context);
  const batata = useContext(Context);
  const { data, planetName: { filterByName: { planetName } } } = batata;
  console.log(batata);
  return (
    <table>
      <Thead />
      <tbody>
        { data
          .filter((planet) => planet.name.includes(planetName))
          .map((item, index) => (
            <tr key={ index }>
              <td>
                {item.name}
              </td>
              <td>
                {item.rotation_period}
              </td>
              <td>
                {item.orbital_period}
              </td>
              <td>
                {item.diameter}
              </td>
              <td>
                {item.climate}
              </td>
              <td>
                {item.gravity}
              </td>
              <td>
                {item.terrain}
              </td>
              <td>
                {item.surface_water}
              </td>
              <td>
                {item.population}
              </td>
              <td>
                {item.residents}
              </td>
              <td>
                {item.films}
              </td>
              <td>
                {item.created}
              </td>
              <td>
                {item.edited}
              </td>
              <td>
                {item.url}
              </td>
            </tr>))}
      </tbody>
    </table>
  );
};

export default RenderTable;
