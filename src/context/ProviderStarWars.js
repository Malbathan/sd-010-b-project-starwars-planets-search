import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarWars from './ContextStarWars';

function ProviderStarWars({ children }) {
  const [data, setData] = useState([]);

  const context = {
    data,
    setData,
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
