import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanetsApiTEST from '../Services/PlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setPlanets] = useState([]);
  useEffect(() => {
    setPlanets(getPlanetsApiTEST);
  }, [data]);

  return (
    <PlanetsContext.Provider value={ data }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlanetsProvider;
