import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([
    {
      name: 'Tatooine',
      population: '200000',
      terrain: 'desert',
    },
    {
      name: 'Yavin IV',
      population: '4000',
      terrain: 'jungle, rainforests',
    },
  ]);
  const context = { data, setData };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
