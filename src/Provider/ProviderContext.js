import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from '../Context/Context';

const ProviderContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [select, setSelect] = useState({ column: '', comparation: '', number: null });

  const fetchApi = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    setData(responseJson.results);
  };

  const handleClick = () => {
    const { column, comparation, number } = select;
    const filterData = data.filter((planet) => {
      if (comparation === 'maior que') return Number(planet[column]) > Number(number);
      if (comparation === 'menor que') return Number(planet[column]) < Number(number);
      return Number(planet[column]) === Number(number);
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
    input,
    handleInput,
    handleSelect,
    handleClick,
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
