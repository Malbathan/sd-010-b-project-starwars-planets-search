import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const filters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: '',
    }],
  };

  const currentFilter = {
    column: '',
    comparison: '',
    value: '',
  };

  const [data, setData] = useState([]);
  const [filtername, setName] = useState(filters);
  const [filterNumeric, setNumeric] = useState(filters);

  const filterInput = ({ target: { value } }) => {
    setName({
      ...filtername,
      filterByName: {
        name: value,
      },
    });
  };
  const handleChange = ({ target: { value, name } }) => {
    currentFilter[name] = value;
  };
  useEffect(() => console.log(filterNumeric), [filterNumeric]);

  const handleClick = () => {
    const { filterByNumericValues } = filterNumeric;

    setNumeric({
      ...filterNumeric,
      filterByNumericValues: [...filterByNumericValues, currentFilter],
    });
  };

  const filterOptions = (planet, column, comparison, value) => {
    const { filterByName: { name } } = filters;
    if (comparison === 'maior que') {
      return planet[column] > value;
    }

    if (comparison === 'menor que') {
      console.log(planet[column], planet[column] < value);
      console.log(value);
      if (planet[column] === 'unknown') return planet[column];
      return planet[column] < value;
    }

    if (comparison === 'igual a') {
      return planet[column] < value;
    }

    return planet.name.includes(name);
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((info) => setData(info.results)).catch((error) => console.log(error));
  }, []);

  const context = {
    filterInput,
    data,
    handleClick,
    screenNumbers,
    filterOptions,
    filtername,
    filterNumeric,
    setData,
    handleChange,
  };

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

export { Provider, Context };
