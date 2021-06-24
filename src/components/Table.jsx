import React, { useEffect, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, fetchAPI } = useContext(PlanetContext);
  useEffect(fetchAPI, []);

  console.log(data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
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
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => {
            <tr>
              <td>{element.name}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
