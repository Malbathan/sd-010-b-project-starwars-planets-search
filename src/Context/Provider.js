import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';
import StarWarsAPI from '../Services/StarWarsAPI';

function StarWars({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [filt, setFilter] = useState({});

  useEffect(() => {
    async function api() {
      const obj = await StarWarsAPI();
      setData(obj.results);
      setLoading(false);
    }
    api();
  }, []);

  const obj = {
    data,
    loading,
    // filt,
  };

  return (
    <MyContext.Provider value={ obj }>
      { children }
    </MyContext.Provider>
  );
}

StarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWars;
