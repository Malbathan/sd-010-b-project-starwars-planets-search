import PropTypes from 'prop-types';
import React from 'react';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  return (
    <StarWarsContext.Provider>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StarWarsProvider;
