import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import giveMePlanets from '../services/giveMePlanets';
import planetsContext from '../contextAPI/planetsContext';
import arrayOperatorOptions from '../services/arrayOperatorOptions';

function ProviderContext({ children }) {
  const [planets, setPlanets] = useState([]);
  const [tableElements, setTableElements] = useState([]);
  const [planetsAfterFilter, setPlanetsAfterFilter] = useState([]);
  const [operatorOptions, setOperatorOptions] = useState([...arrayOperatorOptions]);
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

  const handleNumericFilter = (header, operator, number) => {
    const newObject = {
      column: header,
      comparison: operator,
      value: number,
    };

    if (filter.filterByNumericValues) {
      const newFilter = {
        ...filter,
        filterByNumericValues: [
          ...filter.filterByNumericValues,
          { ...newObject },
        ],
      };
      setFilter(newFilter);
    } else {
      setFilter({ ...filter, filterByNumericValues: [{ ...newObject }] });
    }
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
    handleNumericFilter(header, operator, rawNumber);
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
    operators: {
      operatorOptions,
    },
    filter,
    handleName,
    handleOperatorFilter,
    planetsAfterFilter,
    setFilter,
    setPlanets,
    setTableElements,
    setOperatorOptions,
    setPlanetsAfterFilter,
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
