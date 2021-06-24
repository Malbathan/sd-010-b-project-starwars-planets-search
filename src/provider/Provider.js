import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import givePlanets from '../services/api';

const StarWarsContext = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await givePlanets();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contex = { data };

  return (
    <StarWarsContext.Provider value={ contex }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export { StarWarsContext, Provider };
