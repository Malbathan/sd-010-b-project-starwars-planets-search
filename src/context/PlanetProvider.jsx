import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import getApi from '../services/api';
import PlanetContext from './PlanetContext';
import response from '../testData';

// import Table from '../components/Table';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [nameFilter, setFilterByName] = useState({
    filter: { filterByName: {
      name: '',
    },
    },
  });

  useEffect(() => {
    const starWarPlanets = async () => {
      // const planetArrayApi = await getApi();
      // const planetsApi = planetArrayApi.results;
      // planetsApi.forEach((planet) => delete planet.residents);
      // setPlanets(planetsApi);
      // response.results.forEach((planet) => delete planet.residents);
      setPlanets(response.results);
      console.log(response.results);
    };

    starWarPlanets();
  }, []);

  const myContext = { planets, nameFilter, setFilterByName };

  return (
    <PlanetContext.Provider value={ myContext }>
      {children}
    </PlanetContext.Provider>
  );
}
export default PlanetProvider;
PlanetProvider.propTypes = ({
  children: PropTypes.func,
}).isRequired;
