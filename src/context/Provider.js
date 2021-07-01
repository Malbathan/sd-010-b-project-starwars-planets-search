import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../api';
import store, { FILTERS, OPTIONS, PLANETS } from './store';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState(PLANETS);
  const [filters, setFilters] = useState(FILTERS);
  const [options, setOptions] = useState(OPTIONS); const { details, operator } = options;
  const { isFetching, data, dataFiltered } = planets;
  const { filterOn, column, comparison, number,
    filterTypesOn, filteredByNumbers } = filters;

  const getPlanets = async () => {
    const dataPlanets = await fetchPlanets();
    setPlanets({ ...planets, data: dataPlanets, isFetching: false });
  };

  const handleChange = ({ target: { name, value, id } }) => {
    if (id === 'filterByName') {
      setFilters({ ...filters,
        filterOn: true,
        [name]: value,
        filterNameOn: true });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const filterByNamE = (name) => {
    if (name !== '') {
      let planetsFiltered = data
        .filter((Planets) => Planets.name.includes(name));

      if (!planetsFiltered.length) {
        planetsFiltered = data
          .filter((Planets) => Planets.name.includes((name.length === 1) ? (
            name) : name[0].toUpperCase()));
      }
      setPlanets({ ...planets, dataFiltered: planetsFiltered });
      setFilters({ ...filters,
        filterOn: false,
        name: '',
        filterNameOn: false });
    } else {
      setPlanets({ ...planets, dataFiltered: undefined });
      setFilters({ ...filters,
        filterOn: false,
        name: '',
        filterNameOn: false });
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
    setPlanets({ ...planets, dataFiltered: planetsFiltered });
    setFilters({ ...filters,
      filterOn: false,
      filterTypesOn: false,
      filterByTypes: true,
      number: '' });
  };

  const handleClick = () => {
    const newDetails = details.filter((detail) => detail !== column);

    setOptions({ ...options, details: newDetails });
    setFilters({ ...filters,
      filterOn: true,
      filterTypesOn: true,
      filteredByNumbers: [...filteredByNumbers,
        { id: filteredByNumbers.length, column, comparison, number }] });
  };

  const filterPlanets = () => {
    const { name, filterNameOn } = filters;

    if (filterNameOn) filterByNamE(name);
    if (filterTypesOn) filterByNumber(column, comparison);
  };

  const clearFilter = (id) => {
    const removedFilter = filteredByNumbers.filter((item) => item.id !== id);

    setPlanets({ ...planets, dataFiltered: undefined });
    setFilters({ ...filters, filteredByNumbers: removedFilter });
  };

  //---------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(() => {
    if (isFetching) getPlanets();
    if (filterOn) filterPlanets();
  });

  // CONTEXT API
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
