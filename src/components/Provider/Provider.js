import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
    filterByColumn: [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ],
  };

  const currentFilter = {
    column: '',
    comparison: '',
    value: '',
  };

  const [data, setData] = useState([]);
  const [filtername, setName] = useState(filters);
  const [filterNumeric, setNumeric] = useState(filters);
  const [filterByColumn, setColumn] = useState(filters.filterByColumn);

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

  const handleClick = () => {
    const { filterByNumericValues } = filterNumeric;

    setNumeric({
      ...filterNumeric,
      filterByNumericValues: [...filterByNumericValues, currentFilter],
    });
    const { column } = currentFilter;

    const filteredColumn = filterByColumn.filter((el) => el !== column);
    console.log(filteredColumn);
    setColumn([...filteredColumn]);
  };

  const filterOptions = (planet, column, comparison, value) => {
    const { filterByName: { name } } = filters;
    if (comparison === 'maior que') {
      return planet[column] > value;
    }

    if (comparison === 'menor que') {
      console.log(planet[column], planet[column] < value);
      console.log(value);
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
    filterOptions,
    filtername,
    filterNumeric,
    setData,
    handleChange,
    filterByColumn,
  };

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, Context };
