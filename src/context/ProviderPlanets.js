import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

import { planetsAPI } from '../services/api';

function QuestionsProvider({ children }) {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [typeFilter, setTypeFilter] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [selectFilter, setSelectFilter] = useState({
    status: 'population',
    operator: 'maior que',
    value: 0,
  });
  const [selectedFilter, setSelectedFilter] = useState([]);

  useEffect(() => {
    planetsAPI().then(({ results }) => setData(results));
  }, []);

  const filterName = (string) => {
    const filterPlanet = data.filter((item) => {
      const geral = item.name.toLowerCase();
      const stringValue = string.toLowerCase();
      return geral.includes(stringValue);
    });
    setData2(filterPlanet);
    if (string === '') {
      planetsAPI().then(({ results }) => setData(results));
    }
  };

  const Select = ({ name, value }) => {
    setSelectFilter({ ...selectFilter, [name]: value });
  };

  const filterSelect = (selections) => {
    let list = [];
    if (selections.operator === 'menor que') {
      list = data.filter((itens) => (
        Number(itens[selections.status]) < Number(selections.value)));
    }
    if (selections.operator === 'maior que') {
      list = data.filter((itens) => (
        Number(itens[selections.status]) > Number(selections.value)));
    }
    if (selections.operator === 'igual a') {
      list = data.filter((itens) => (
        Number(itens[selections.status]) === Number(selections.value)));
    }
    setData2(list);
    const newFilter = typeFilter.filter((item) => item !== selections.status);
    setSelectedFilter([selections.status]);
    setTypeFilter(newFilter);
  };

  const resetFilter = ({ value }) => {
    const filterFull = [...typeFilter, value];
    setTypeFilter(filterFull);
    setData2([]);
  };

  const values = {
    data,
    data2,
    filterName,
    filterSelect,
    Select,
    selectFilter,
    typeFilter,
    selectedFilter,
    resetFilter,
  };

  return (
    <PlanetContext.Provider value={ { values } }>
      {children}
    </PlanetContext.Provider>
  );
}

QuestionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuestionsProvider;
