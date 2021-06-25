import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planContext from '../context/planContext';
import fetchURL from '../services/api';

function ProviderPlan({ children }) {
  const [data, setData] = useState([]);
  const state = {
    data,
    setData,
  };

  useEffect(() => {
    fetchURL().then(({ results }) => setData(results));
  }, []);

  return (
    <planContext.Provider value={ state }>
      {children}
    </planContext.Provider>

  );
}

ProviderPlan.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProviderPlan;
