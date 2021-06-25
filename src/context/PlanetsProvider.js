import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

import getPlanets from '../services/api';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  async function fetchApi() {
    const planets = await getPlanets();
    setData(planets.results);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
