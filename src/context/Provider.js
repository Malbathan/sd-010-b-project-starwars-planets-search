import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../api';
import store, { initialState } from './store';

const Provider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const { isFetching, data, dataFiltered, filters } = state;
  const { exec, filterByName: { name } } = filters;

  const getPlanets = async () => {
    const planets = await fetchPlanets();
    console.log(planets);
    setState({ ...state, data: planets, isFetching: false });
  };

  const handleChange = ({ target: { value } }) => {
    setState({ ...state,
      filters: { ...filters, exec: true, filterByName: { name: value } } });
  };

  const filterPlanets = () => {
    if (name !== '') {
      let planetsFiltered = data
        .filter((planets) => planets.name.includes(name));

      if (!planetsFiltered.length) {
        planetsFiltered = data
          .filter((planets) => planets.name.includes((name.length === 1) ? (
            name) : name[0].toUpperCase()));
      }

      setState({ ...state,
        dataFiltered: planetsFiltered,
        filters: { ...filters, exec: false } });
    } else {
      setState({ ...state,
        dataFiltered: undefined,
        filters: { ...filters, exec: false } });
    }
  };

  useEffect(() => {
    if (isFetching) getPlanets();
    if (exec) filterPlanets();
  });

  //---------------------------------------------------------------------

  const contextValue = {
    data,
    dataFiltered,
    handleChange,
  };

  //---------------------------------------------------------------------

  return (
    <store.Provider value={ contextValue }>
      { children }
    </store.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
