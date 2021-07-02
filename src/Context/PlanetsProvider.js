import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [login, setLogin] = useState([]);

  const context = {
    login,
    setLogin,
  };
  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>

  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;
