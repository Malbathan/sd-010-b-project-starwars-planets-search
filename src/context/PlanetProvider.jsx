import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../services/api';
import PlanetContext from './PlanetContext';
// import response from '../testData';

// import Table from '../components/Table';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilterByName] = useState({
    filter:
    {
      filterByName: {
        name: '',
      },
    },
  });

  const [numericFilter, setFilterByNumber] = useState({
    filter: {
      filterByNumericValues: [
        {
          column: 'population',
          comparisson: 'menor que',
          value: '0',
        },
        // {
        //   column: 'population',
        //   comparisson: 'maior que',
        //   value: '100000',
        // },
      ],
    },
  });

  useEffect(() => {
    const starWarPlanets = async () => {
      const planetArrayApi = await getApi();
      const planetsApi = planetArrayApi.results;
      planetsApi.forEach((planet) => delete planet.residents);
      setPlanets(planetsApi);
      // response.results.forEach((planet) => delete planet.residents);
      // // delete response.results.residents;
      // setPlanets(response.results);
    };

    starWarPlanets();
  }, []);

  const myContext = { planets,
    filters,
    setFilterByName,
    numericFilter,
    setFilterByNumber,
  };

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
