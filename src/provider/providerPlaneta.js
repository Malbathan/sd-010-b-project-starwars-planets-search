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

  });

  console.log(filters);
  useEffect(() => {
    fetchURL().then(({ results }) => setData(results));
  }, []);

  function filtered({ value }) {
    setFilter({ ...filters, filterByName: { name: value } });

    // const filter = beckupData
    //   .filter((planet) => planet.name.includes(filters.filterByName.name));
    // setData(filter);
    // console.log(filter);
    // console.log(data);
  }
  const state = {
    data,
    setData,
    filters,
    setFilter,
    filtered,
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
