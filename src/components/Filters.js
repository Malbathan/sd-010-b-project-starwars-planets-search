import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { setFilterByName } = useContext(PlanetsContext);

  return (
    <label htmlFor="filterByName">
      Name
      <input
        id="filterByName"
        data-testid="name-filter"
        type="text"
        onChange={ ({ target: { value } }) => {
          setFilterByName(value);
        } }
      />
    </label>
  );
}

// Filters.propTypes = {};

export default Filters;
