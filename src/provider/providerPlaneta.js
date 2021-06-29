import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planContext from '../context/planContext';
import fetchURL from '../services/api';

function ProviderPlan({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({

    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: '',
      comparison: 'maior que',
      value: '',
    }],
  });
  const [arrayFiltered, setArrayFiltered] = useState([]);

  useEffect(() => {
    fetchURL().then(({ results }) => setData(results));
  }, []);

  function filterByName({ value }) {
    setFilter({ ...filters, filterByName: { name: value } });
  }

  // function filterByNumericValues({ value }) {
  //   setFilter({ ...filters, filterByNumericValues: { name: value } });
  // }

  const state = {
    data,
    setData,
    filters,
    setFilter,
    filterByName,
    setArrayFiltered,
    arrayFiltered,

  };

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
