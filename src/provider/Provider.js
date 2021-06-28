import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import reqPlanets from '../services/servicesApi';

const ContextFromPlanets = createContext();

function Provider({ children }) {
  const initial = {
    filterByName: '',
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  };

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initial);

  const fetchData = async () => {
    const result = await reqPlanets();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = { data, filters, setFilters, setData };

  return (
    <ContextFromPlanets.Provider value={ contextValue }>
      { children }
    </ContextFromPlanets.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export { ContextFromPlanets, Provider };
