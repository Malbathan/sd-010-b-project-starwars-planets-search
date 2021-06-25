import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

import getPlanets from '../services/api';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  async function fetchApi() {
    const planets = await getPlanets();
    planets.map((planet) => delete planet.residents);
    setData(planets);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data, filters, setFilter } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
