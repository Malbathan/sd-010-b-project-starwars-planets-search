import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TableContext from '../../context/TableContext';

function CreateListTable() {
  const { data, filters } = useContext(TableContext);

  const { name: namePlanet } = filters.filterByName;

  const filterPlanets = data
    .filter(({ name }) => name.toUpperCase()
      .includes(namePlanet.toUpperCase()));

  return (
    <tbody>
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
        <th>residents</th>
        <th>films</th>
        <th>created</th>
        <th>edited</th>
      </tr>
      {filterPlanets.map((planet, index) => (
        <tr key={ index }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.residents}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>

        </tr>
      ))}
    </tbody>
  );
}

CreateListTable.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.any),
}.isRequired;

export default CreateListTable;
