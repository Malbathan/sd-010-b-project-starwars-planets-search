import React, { useContext } from 'react';
import ContextTabela from '../context/ContextTabela';
// import FilteredNames from './Filters';

function Table() {
  const { data } = useContext(ContextTabela);
  const { filters } = useContext(ContextTabela);
  const { filterByName } = filters;
  const { name } = filterByName;
  const filterName = data.filter((el) => el.name.toLowerCase().includes(name));

  return (
    <table>
      <thead>
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
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {filterName.map((planetName, index) => (
          <tr key={ index }>
            <td>{planetName.name }</td>
            <td>{planetName.rotation_period }</td>
            <td>{planetName.orbital_period }</td>
            <td>{planetName.diameter }</td>
            <td>{planetName.climate }</td>
            <td>{planetName.gravity }</td>
            <td>{planetName.terrain }</td>
            <td>{planetName.surfaceWater }</td>
            <td>{planetName.population }</td>
            <td>{planetName.films }</td>
            <td>{planetName.created }</td>
            <td>{planetName.edited }</td>
            <td>{planetName.url }</td>
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
