import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

import fetchPlanets, { urlArray } from '../services/Api';

function StarWarsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      urlArray.map(async (url) => {
        const planets = await fetchPlanets(url);
        setData(planets.results);
      });
      setLoading(true);
    }
    fetchData();
  }, [data]);

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
