import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const filters = {
    filterByName: {
      name: '',
    },
    numbers: {
      column: '',
      comparison: '',
      value: '',
    },
  };

  const [data, setData] = useState([]);
  const [filtername, setName] = useState(filters);
  const [filterNumeric, setNumeric] = useState(filters);
  const [screenNumbers, setScreenNumbers] = useState(false);

  const filterInput = ({ target: { value } }) => {
    setName({
      ...filtername,
      filterByName: {
        name: value,
      },
    });
  };
  const handleChange = ({ target: { value, name } }) => {
    const { numbers } = filterNumeric;

    setNumeric({
      ...filterNumeric,
      numbers: { ...numbers, [name]: value },
    });
  };

  const handleClick = () => {
    setScreenNumbers(!screenNumbers);
  };

  const filterOptions = (planet, column, comparison, value) => {
    const { filterByName: { name } } = filters;
    if (screenNumbers === true) {
      if (comparison === 'maior que') {
        return planet[column] > value;
      // console.log(value);
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
    }

    return planet.name.includes(name);
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((info) => setData(info.results)).catch((error) => console.log(error));
  }, []);

  const context = {
    filterInput, data, handleClick, screenNumbers, filterOptions, filtername, filterNumeric, setData, handleChange,
  };

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

export { Provider, Context };
