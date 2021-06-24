import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

import { planetsAPI } from '../services/api';

function QuestionsProvider({ children }) {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

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

  const values = {
    data,
    data2,
    filterName,
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
