import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarWars from './ContextStarWars';

function ProviderStarWars({ children }) {
  const [planetList, setPlanetList] = useState([]);
  console.log(children);

  const context = {
    planetList,
    setPlanetList,
  };
  return (
    <ContextStarWars.Provider value={ context }>
      {children}
    </ContextStarWars.Provider>
  );
}

ProviderStarWars.propTypes = {
  children: PropTypes.shape(Object).isRequired,
};

export default ProviderStarWars;
