import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from '../Context/Context';

const ProviderContext = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    setData(responseJson.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const INITIAL_STATE = {
    data,
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
