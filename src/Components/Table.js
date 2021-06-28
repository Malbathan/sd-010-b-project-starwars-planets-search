import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

const Table = () => {
  // let value = [];
  const value = useContext(PlanetsContext);
  console.log(value);
  return value === [] ? null : (
    <table>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
      {value.map((planet, index) => {
        delete planet.residents;
        // Source: https://www.w3schools.com/howto/howto_js_remove_property_object.asp
        const planetsArray = Object.values(planet);
        const planetsKeys = Object.keys(planet);
        return (
          <tr key={ index }>
            {planetsArray.map((obj, index2) => (
              <td key={ planetsKeys[index2] }>{obj}</td>
            ))}
          </tr>);
      })}
    </table>
  );
};

export default Table;
