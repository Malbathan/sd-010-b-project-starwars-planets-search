import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsAPI from '../services/planetsAPI';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);

  const dataAPI = async () => {
    const response = await fetchPlanetsAPI();
    setData(response.results);
  };

  useEffect(() => {
    dataAPI();
  }, []);

  return (
    <PlanetContext.Provider value={ { data } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = ({
  children: PropTypes.shape().isRequired,
});

export default PlanetProvider;
