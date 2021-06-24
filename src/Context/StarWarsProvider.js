import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planetList, setPlanetList] = useState({});
  return (
    <StarWarsContext.Provider value={ { planetList, setPlanetList } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default StarWarsProvider;
