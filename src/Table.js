import React, { useContext } from 'react';
import planetsContext from './context/Context';

function Table() {
  const { planets } = useContext(planetsContext);

  const tableHead = () => {
    if (planets) {
      const keys = Object.keys(planets[0]);
      const arrayObject = keys.filter((key) => key !== 'residents');
      return arrayObject.map((element) => (
        <th key={ element }>{element}</th>
      ));
    }
  };

  const tableBody = () => {
    if (planets) {
      return planets.map((element, index) => (
        <tr key={ index }>
          <td>{ element.name }</td>
          <td>{ element.rotation_period }</td>
          <td>{ element.orbital_period }</td>
          <td>{ element.diameter }</td>
          <td>{ element.climate }</td>
          <td>{ element.gravity}</td>
          <td>{ element.terrain}</td>
          <td>{ element.surface_water}</td>
          <td>{ element.population}</td>
          <td>{ element.films}</td>
          <td>{ element.created}</td>
          <td>{ element.edited}</td>
          <td>{ element.url}</td>
        </tr>
      ));
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHead()}
          </tr>
        </thead>
        <tbody>
          {tableBody()}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
