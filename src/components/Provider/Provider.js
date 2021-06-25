import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const filters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues:
      {
        column: '',
        comparison: '',
        value: '',
      },
    // data: [],
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
    }); console.log(filtername);
  };
  const handleClick = ({ target: { value, name } }) => {
    // console.log('batata');
    console.log(value);
    console.log(name);

    const { filterByNumericValues } = filters;
    filterByNumericValues[name] = value;

    setNumeric({
      ...filterNumeric,
      filterByNumericValues: { ...filterByNumericValues, filterByNumericValues },
    });
    console.log(filterByNumericValues);
    console.log(filterNumeric);
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((info) => setData(info.results)).catch((error) => console.log(error));
  }, []);

  const context = {
    filterInput, data, filtername, setData, handleClick,
  };

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

export { Provider, Context };
