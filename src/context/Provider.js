import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../API/getPlanets';
import Context from './Context';

function Provider({ children }) {
  // states
  const [planetsList, setPlanetsList] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [headersList, setHeadersList] = useState([]);

  const filterHeaders = (planets) => {
    const headers = Object.keys(planets[0]);
    setHeadersList(headers);
    console.log(headers);
  };

  const fetchPlanets = async () => {
    setFetching(true);
    const planetsApi = await getPlanets();
    filterHeaders(planetsApi);
    setPlanetsList(planetsApi);
    console.log(planetsApi);
  };

  const context = {
    planetsList,
    fetching,
    headersList,
    fetchPlanets,
    filterHeaders,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
