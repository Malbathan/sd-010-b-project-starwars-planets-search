import React, { useContext, useEffect } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const {
    data,
    getPlanets,
    handleChange,
    filters: { filterByName: { name } } } = useContext(TableContext);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return (
    <div>
      <input type="text" data-testid="name-filter" onChange={ handleChange } />
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
          {data
            .filter((response) => (name
              ? response.name.includes(name)
              : response))
            .map(({
              name: planet,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              created,
              edited,
              url,
            }, index) => (
              <tr key={ index }>
                <td>{ planet }</td>
                <td>{ rotationPeriod }</td>
                <td>{ orbitalPeriod }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ surfaceWater }</td>
                <td>{ population }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
                <td>{ url }</td>
              </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
