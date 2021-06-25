import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../api';
import store, { initialState } from './store';

const Provider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const { isFetching, data, dataFiltered, filters } = state;
  const { filterOn, details, operator, options } = filters;
  const { filterByName, filterByTypes, filteredByNumbers } = options;
  const { column, comparison, number, filterTypesOn } = filterByTypes;

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

  const filterByNumber = (Column, Comparison) => {
    const renderPlanets = dataFiltered || data;
    const planetsFiltered = renderPlanets
      .filter((planet) => {
        if (Comparison === 'maior que') {
          return (parseInt(planet[Column], 10) > parseInt(number, 10));
        }
        if (Comparison === 'menor que') {
          return (parseInt(planet[Column], 10) < parseInt(number, 10));
        }
        if (Comparison === 'igual a') {
          return (parseInt(planet[Column], 10) === parseInt(number, 10));
        }
        return data;
      });
    setState({ ...state,
      dataFiltered: planetsFiltered,
      filters: { ...filters,
        filterOn: false,
        options: { ...options,
          filterByTypes: { ...filterByTypes, number: '', filterTypesOn: false } } } });
  };

  const handleClick = () => {
    const newDetails = details.filter((detail) => detail !== column);

    setState({ ...state,
      filters: { ...filters,
        filterBtn: true,
        filterOn: true,
        details: newDetails,
        options: { ...options,
          filterByTypes: { ...filterByTypes, filterTypesOn: true },
          filteredByNumbers: [...filteredByNumbers,
            { id: filteredByNumbers.length, column, comparison, number }],
        },
      } });
  };

  const filterPlanets = () => {
    const { name, filterNameOn } = filterByName;

    if (filterNameOn) filterByNamE(name);
    if (filterTypesOn) filterByNumber(column, comparison);
  };

  const clearFilter = (id) => {
    const removedFilter = filteredByNumbers.filter((item) => item.id !== id);

    setState({ ...state,
      dataFiltered: undefined,
      filters: { ...filters,
        options: { ...options,
          filteredByNumbers: removedFilter,
        },
      } });
  };

  useEffect(() => {
    if (isFetching) getPlanets();
    if (filterOn) filterPlanets();
  });

  //---------------------------------------------------------------------

  const contextValue = {
    data,
    dataFiltered,
    details,
    operator,
    number,
    filteredByNumbers,
    handleChange,
    handleClick,
    clearFilter,
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
