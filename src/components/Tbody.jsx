import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

import FilterByName, { FilterByNumericValues } from './Filters';

function Tbody({ data }) {
  const { filters } = useContext(PlanetsContext);
  const { filterByName, filterByNumericValues } = filters;
  const { name } = filterByName;

  const planetsArr = () => {
    if (name) {
      return FilterByName(data);
    }
    if (filterByNumericValues.length) {
      return FilterByNumericValues(data);
    }
    return data;
  };

  return (
    <tbody>
      {planetsArr().map((planet, index) => (
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
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

Tbody.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default Tbody;
