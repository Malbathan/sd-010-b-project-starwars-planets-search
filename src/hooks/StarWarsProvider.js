import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarWarsContext from './StarWarsContext';
import starWarsAPI from '../services/starWarsAPI';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    const response = async () => {
      const data = await starWarsAPI();
      setPlanets(data);
    };
    response();
  }, []);

  return (
    <StarWarsContext.Provider value={ planets }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StarWarsProvider;
