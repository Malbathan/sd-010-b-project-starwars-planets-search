import React, { useContext } from 'react';
import Context from '../context/context';

function Table() {
  const { data } = useContext(Context);
  console.log(data);
  // const newData = data.filter((response) => Object.keys(response) !== 'residents');
  // console.log(newData)
  const renderTable = () => (
    <table border="1" width="500px">
      <tr>
        <th>name</th>
        <th>rotation_period</th>
        <th>orbital_period</th>
        <th>diameter</th>
        <th>climate</th>
        <th>gravity</th>
        <th>terrain</th>
        <th>surface_water</th>
        <th>population</th>
        <th>films</th>
        <th>created</th>
        <th>edited</th>
        <th>url</th>
      </tr>
      {data.map((planet, i) => (
        <tr key={ i }>
          <td>{ planet.name }</td>
          <td>{ planet.rotation_period }</td>
          <td>{ planet.orbital_period }</td>
          <td>{ planet.diameter }</td>
          <td>{ planet.climate }</td>
          <td>{ planet.gravity }</td>
          <td>{ planet.terrain }</td>
          <td>{ planet.surface_water }</td>
          <td>{ planet.population }</td>
          <td>{ planet.films.map((film, id) => <ul key={ id }><li>{film}</li></ul>) }</td>
          <td>{ planet.created }</td>
          <td>{ planet.edited }</td>
          <td>{ planet.url }</td>
        </tr>))}
    </table>
  );
  return (
    <div>
      { data && renderTable() }
    </div>
  );
}

export default Table;
