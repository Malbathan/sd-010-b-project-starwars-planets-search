import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import giveMePlanets from '../services/giveMePlanets';
import planetsContext from '../contextAPI/planetsContext';

function ProviderContext({ children }) {
  const [planets, setPlanets] = useState([]);
  const [tableElements, setTableElements] = useState([]);
  const [planetsAfterFilter, setPlanetsAfterFilter] = useState([]);
  const [filter, setFilter] = useState({});

  const handleName = ({ value }) => {
    const planetsFound = planets.filter((planet) => {
      const name = planet.name.toLowerCase();
      const input = value.toLowerCase();
      return name.includes(input);
    });
    const filterByName = {
      name: value,
    };
    setPlanetsAfterFilter(planetsFound);
    setFilter({ ...filter, filterByName });
  };

  const handleOperatorFilter = (header, operator, rawNumber) => {
    const number = Number(rawNumber);
    let result = [];
    if (operator === 'maior que') {
      result = planetsAfterFilter.filter((planet) => Number(planet[header]) > number);
    }
    if (operator === 'menor que') {
      result = planetsAfterFilter.filter((planet) => Number(planet[header]) < number);
    }
    if (operator === 'igual a') {
      result = planetsAfterFilter.filter((planet) => Number(planet[header]) === number);
    }
    setPlanetsAfterFilter(result);
  };

  useEffect(() => {
    const makeRequest = () => giveMePlanets().then(({ results }) => {
      const data = (results.map((info) => {
        delete info.residents;
        return info;
      }));
      setPlanets(data);
      setPlanetsAfterFilter(data);
    });
    makeRequest();
  }, []);

  const state = {
    planets: {
      planets,
    },
    tableElements: {
      tableElements,
    },
    planetsAfterFilter,
    filter,
    setFilter,
    setPlanets,
    setTableElements,
    setPlanetsAfterFilter,
    handleName,
    handleOperatorFilter,
  };

  return (
    <planetsContext.Provider value={ state }>
      { children }
    </planetsContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderContext;
