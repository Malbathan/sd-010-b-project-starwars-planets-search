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
    /* if (value.length === 0) {
      delete filter.filterByName;
      const newFilter = filter;
      setFilter(newFilter);
      return;
    } */
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
