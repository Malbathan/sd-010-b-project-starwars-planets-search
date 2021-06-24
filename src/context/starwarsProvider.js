import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/starwarAPI';
import starwarsContext from './starwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const starWarsAPI = await getPlanets();
    setData(starWarsAPI);
  };

  useEffect(() => { fetchAPI(); }, []);

  return (
    <starwarsContext.Provider value={ { data, fetchAPI } }>
      {children}
    </starwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarwarsProvider;
