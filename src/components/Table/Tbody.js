import React from 'react';
import PropTypes from 'prop-types';
import Trow from './Trow';

const Tbody = ({ planets }) => (
  <tbody>
    {planets.map((planet) => (
      <tr key={ planet.name }>
        <Trow planet={ planet } />
      </tr>
    ))}
  </tbody>
);

Tbody.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tbody;
