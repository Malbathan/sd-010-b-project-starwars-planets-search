// import { createContext } from 'jest-runtime';
import React, { createContext, useState, useEffect } from 'react';
// import FetchApi from '../../FetchApi';

const Context = createContext();

const Provider = ({ children }) => {
  const filters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
    // data: [],
  };

  const [data, setData] = useState([]);
  const [name, setName] = useState(filters);

  const filterInput = ({ target: { value } }) => {
    setName({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    // console.log(initialState);
    console.log(value);
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json()).then((info) => setData(info.results)).catch((error) => console.log(error));
  }, []);

  const context = {
    filterInput, data, name, setData, initialState,
  };

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

export { Provider, Context };
