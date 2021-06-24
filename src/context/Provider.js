import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import startwarsApi from '../services/starwarsApi';

function Provider({ children }) {
  const INITIAL_STATE = {
    data: [],
    loading: true,
  };

  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    async function planetsApi() {
      const response = await startwarsApi();
      setState((prevState) => ({
        ...prevState,
        data: response,
        loading: false,
      }));
    }
    planetsApi();
  }, []);

  const context = {
    ...state,
  };

  return (
    <myContext.Provider value={ context }>
      {children}
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
