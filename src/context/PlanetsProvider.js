import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PlanetsContext } from '.';
import fetchPlanets from '../services/fetchPlanets';

function PlanetsProvider({ children }) {
  const [data, setPlanets] = useState([]);
  const [orderColumns, setOrderColumns] = useState([]);
  const [filteredValues, setFilteredValues] = useState([]);

  function createOrderColumns() {
    return Object.keys(data[0]).filter((column) => !column.match(/^residents$/i));
  }

  function orderBySelectedValues() {
    const LESS_THAN = -1;
    return data.sort((a, b) => (
      a.name < b.name ? LESS_THAN : Number(a.name > b.name) // REF_1
    ));
  }

  const getPlanets = async () => {
    const planets = await fetchPlanets();
    setPlanets(planets);
    // setFilteredValues(orderBySelectedValues());
  };

  useEffect(() => {
    getPlanets();
    // orderBySelectedValues();
    // setFilteredValues(orderBySelectedValues());
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      // orderBySelectedValues();
      setFilteredValues(orderBySelectedValues());
      setOrderColumns(createOrderColumns());
    }
  }, [data]);

  return (
    <PlanetsContext.Provider
      value={ { data, filteredValues, orderColumns, setFilteredValues } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
