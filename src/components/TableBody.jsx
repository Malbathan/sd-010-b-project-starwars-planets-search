import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function TableBody() {
  const {
    data, filteredByName, textFilter, wasFilteredByNumber, filteredByNumber,
  } = useContext(PlanetsContext);
  let showData = textFilter.length === 0 ? data : filteredByName;
  if (wasFilteredByNumber) {
    showData = filteredByNumber;
  }
  return (
    <tbody>
      {showData.map((planet, idx) => (
        <tr key={ idx }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
