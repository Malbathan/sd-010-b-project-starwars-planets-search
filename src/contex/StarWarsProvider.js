import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getAPIPlanetsInfo from '../services/PlanetsListsAPI';
// import { mochResolved } from '../services/dataMoch';

import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [isLoading, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  // Ajuda do colega Dennis Marcelo para resolver requisicao e problemas com o Hook useEffect

  useEffect(() => {
    async function fetchPlanetsList() {
      setLoader(true);
      const planets = await getAPIPlanetsInfo();
      setData(planets);
      setHeaders(Object.keys(planets[0]));
      setLoader(false);
    }
    fetchPlanetsList();
  }, []);

  // async function fetchPlanetsList() {
  //   setLoader(true);
  //   setterList(mochResolved.results);
  //   setLoader(false);
  // }

  // PropTypes pesquisado em: https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

  StarWarsProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  return (
    <StarWarsContext.Provider value={ { isLoading, data, headers } }>
      {children}
    </StarWarsContext.Provider>
  );
}
