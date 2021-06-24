import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

import fetchPlanets, { urlArray } from '../services/Api';

function StarWarsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const planets = await fetchPlanets(urlArray[0]);
      setData(planets.results);
      setLoading(true);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     urlArray.map(async (url) => {
  //       let planets = [];
  //       planets = (await fetchPlanets(url));
  //       setData(planets.results);
  //     });
  //     setLoading(true);
  //   }
  //   fetchData();
  // }, []);

  return (
    <StarWarsContext.Provider value={ { data, loading } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequires;

export default StarWarsProvider;
