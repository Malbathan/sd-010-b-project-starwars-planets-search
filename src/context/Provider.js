import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../api';
import store, { initialState } from './store';

const Provider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const { isFetching, data, dataFiltered, filters } = state;
  const { filterOn, renderColumn, renderComparison, options } = filters;
  const { filterByTypes } = options;

  const getPlanets = async () => {
    const planets = await fetchPlanets();
    console.log(planets);
    setState({ ...state, data: planets, isFetching: false });
  };

  const handleChange = ({ target: { name, value, id } }) => {
    if (id === 'filterByName') {
      setState({ ...state,
        filters: { ...filters,
          filterOn: true,
          options: { filterByName: { [name]: value, filterNameOn: true } } } });
    } else {
      setState({ ...state,
        filters: { ...filters,
          options: { filterByTypes: {
            ...filterByTypes,
            [name]: value,
            filterTypesOn: true } } } });
    }
  };

  const filterPlanets = () => {
    const { filterByName: { name, filterNameOn } } = options;
    if (filterNameOn) {
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
          filters: { ...filters,
            filterOn: false,
            options: { filterByName: { filterNameOn: false } } } });
      } else {
        setState({ ...state,
          dataFiltered: undefined,
          filters: { ...filters, filterOn: false } });
      }
    }
  };

  useEffect(() => {
    if (isFetching) getPlanets();
    if (filterOn) filterPlanets();
  });

  //---------------------------------------------------------------------

  const contextValue = {
    data,
    dataFiltered,
    renderColumn,
    renderComparison,
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
