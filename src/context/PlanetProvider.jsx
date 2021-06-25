import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsAPI from '../services/planetsAPI';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  // const [filters, setFilters] = useState({});

  // {
  //   filters: {
  //     filterByName: {
  //       name: 'Tatoo',
  //     };
  //   };
  // };

  const dataAPI = async () => {
    const response = await fetchPlanetsAPI();
    setData(response.results);
    setPlanets(response.results);
  };

  useEffect(() => {
    dataAPI();
  }, []);

  return (
    <PlanetContext.Provider value={ { data, setData, planets, setPlanets } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = ({
  children: PropTypes.shape().isRequired,
});

export default PlanetProvider;
