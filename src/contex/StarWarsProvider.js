import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getAPIPlanetsInfo from '../services/PlanetsListsAPI';

import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [isLoading, setLoader] = useState(false);
  const [planetsList, setterList] = useState([]);
  async function fetchPlanetsList() {
    setLoader(true);
    const planets = await getAPIPlanetsInfo();
    setterList(planets);
    setLoader(false);
  }
  // PropTypes pesquisado em: https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

  StarWarsProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  return (
    <StarWarsContext.Provider value={ { isLoading, planetsList, fetchPlanetsList } }>
      {children}
    </StarWarsContext.Provider>
  );
}
