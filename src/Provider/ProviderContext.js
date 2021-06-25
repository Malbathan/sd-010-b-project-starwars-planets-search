import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from '../Context/Context';

const ProviderContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [select, setSelect] = useState({ column: '', comparison: '', value: null });

  const fetchApi = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    setData(responseJson.results);
  };

  const handleClick = () => {
    const { column, comparison, value } = select;
    const filterData = data.filter((planet) => {
      if (comparison === 'maior que') return Number(planet[column]) > Number(value);
      if (comparison === 'menor que') return Number(planet[column]) < Number(value);
      return Number(planet[column]) === Number(value);
    });
    setData(filterData);
  };

  const handleInput = ({ target }) => {
    setInput(target.value);
  };

  const handleSelect = ({ target: { id, value } }) => {
    setSelect({
      ...select,
      [id]: value,
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const INITIAL_STATE = {
    data,
    handleInput,
    handleSelect,
    handleClick,
    filters: {
      filterByName: {
        name: input,
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
      ],
    },
  };

  return (
    <context.Provider value={ INITIAL_STATE }>
      {children}
    </context.Provider>
  );
};

ProviderContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProviderContext;
