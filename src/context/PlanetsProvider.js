import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../API/index';
import contextPlanets from './contextPlanets';

const INITIAL_FILTER_NAME = {
  filterByName: {
    name: '',
  },
};
function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState(INITIAL_FILTER_NAME);

  const getPlanets = () => {
    getApi().then((results) => setData(results));
  };

  useEffect(getPlanets, []);

  const searchPlanetsName = ({ target: { value } }) => {
    setFilter({ ...filters,
      filterByName:
      { name: value } });
  };

  const context = {
    data,
    filters,
    searchPlanetsName,
  };
  return (
    <contextPlanets.Provider value={ context }>
      {children}
    </contextPlanets.Provider>
  );
}

PlanetsProvider.propTypes = { children: PropTypes.node.isRequired };
export default PlanetsProvider;
