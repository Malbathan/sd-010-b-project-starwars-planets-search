import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getAPIPlanetsInfo from '../services/PlanetsListsAPI';
// import { mochResolved } from '../services/dataMoch';

import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [isLoading, setLoader] = useState(false);
  const [data, setterList] = useState([]);
  const [headers, setHeaders] = useState([]);

  async function fetchPlanetsList() {
    setLoader(true);
    const planets = await getAPIPlanetsInfo();
    setterList(planets);
    setHeaders(Object.keys(planets[0]));
    setLoader(false);
  }

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
    <StarWarsContext.Provider value={ { isLoading, data, fetchPlanetsList, headers } }>
      {children}
    </StarWarsContext.Provider>
  );
}
