import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function ApiProvider({ children }) {
  const [resultApi, setResultApi] = useState();
  console.log(children);

  useEffect(() => {
    const getApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint).then((data) => data.json());
      setResultApi(response);
    };
    getApi();
  }, []);

  return (
    <main>
      <MyContext.Provider value={ { resultApi } }>
        { children }
      </MyContext.Provider>
    </main>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
