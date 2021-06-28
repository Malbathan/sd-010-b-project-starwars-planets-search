import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';
import StarWarsAPI from '../Services/StarWarsAPI';

function StarWars({ children }) {
  const { planets, setPlanets } = useState([]);
  const { loading, setLoading } = useState(true);
  const { filt, setFilter } = useState({});

  useEffect(() => {
    async function api() {
      const { results } = await StarWarsAPI();
      setPlanets(results);
      setLoading(false);
    }
    api();
  },[setPlanets]);



  const obj = {};
  return (
    <Context.Provider value={ obj }>
      { children }
    </Context.Provider>
  );
}

StarWars.propTypes = {
  children: PropTypes.node.isRiquered,
};

export default StarWars;
