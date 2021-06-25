import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../api';
import store, { initialState } from './store';

const Provider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const { isFetching, data, dataFiltered, filters } = state;
  const { filterOn, renderColumn, renderComparison, options } = filters;
  const { filterByName, filterByTypes } = options;

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
          options: { ...options,
            filterByName: { [name]: value, filterNameOn: true } } } });
    } else {
      setState({ ...state,
        filters: { ...filters,
          options: { ...options,
            filterByTypes: { ...filterByTypes, [name]: value } } } });
    }
  };

  const filterByNamE = (name) => {
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
          options: { ...options, filterByName: { name: '', filterNameOn: false } } } });
    } else {
      setState({ ...state,
        dataFiltered: undefined,
        filters: { ...filters,
          filterOn: false,
          options: { ...options, filterByName: { name: '', filterNameOn: false } } } });
    }
  };

  const filterByNumber = (column, comparison, number) => {
    const planetsFiltered = data
      .filter((planet) => {
        if (comparison === 'maior que') {
          return (parseInt(planet[column], 10) > parseInt(number, 10));
        }
        if (comparison === 'menor que') {
          return (parseInt(planet[column], 10) < parseInt(number, 10));
        }
        if (comparison === 'igual a') {
          return (parseInt(planet[column], 10) === parseInt(number, 10));
        }
        return data;
      });
    setState({ ...state,
      dataFiltered: planetsFiltered,
      filters: { ...filters,
        filterOn: false,
        options: { ...options, filterByTypes: { filterTypesOn: false } } } });
  };

  const handleClick = () => {
    setState({ ...state,
      filters: { ...filters,
        filterOn: true,
        options: { ...options,
          filterByTypes: { ...filterByTypes, filterTypesOn: true } } } });
  };

  const filterPlanets = () => {
    const { name, filterNameOn } = filterByName;
    const { column, comparison, number, filterTypesOn } = filterByTypes;

    if (filterNameOn) filterByNamE(name);
    if (filterTypesOn) filterByNumber(column, comparison, number);
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
    handleClick,
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
