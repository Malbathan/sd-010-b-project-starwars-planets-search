import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../services/api';
import PlanetContext from './PlanetContext';
// import response from '../testData';

// import Table from '../components/Table';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const starWarPlanets = async () => {
      const planetArrayApi = await getApi();
      const planetsApi = planetArrayApi.results;
      planetsApi.forEach((planet) => delete planet.residents);
      // delete planetApi.residents;
      setPlanets(planetsApi);
      // setPlanets(response.results);
    };

    starWarPlanets();
  }, []);
  return (
    <PlanetContext.Provider value={ { planets } }>
      {children}
    </PlanetContext.Provider>
  );
}
export default PlanetProvider;
PlanetProvider.propTypes = ({
  children: PropTypes.func,
}).isRequired;
