import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/fetchPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [head, setHead] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const getPlanets = async () => {
      const request = await fetchPlanets();
      setData(request);
      setHead((Object.keys(request[0]))
        .filter((item) => item !== 'residents')
        .map((item) => item));
    };
    getPlanets();
  }, []);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const context = {
    data,
    head,
    filters,
    handleChange,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
