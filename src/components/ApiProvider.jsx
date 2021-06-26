import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function ApiProvider({ children }) {
  // const obj = {
  //   filters: {
  //     filterByName: {
  //       name,
  //     },
  //   },
  // };
  const [resultApi, setResultApi] = useState();
  const [filterApi, setFilterApi] = useState('');

  useEffect(() => {
    const getApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint).then((data) => data.json());
      const apiFiltrada = response.results
        .filter((planet) => planet.name.includes(filterApi));
      if (!filterApi) {
        setResultApi(response.results);
      }
      console.log(apiFiltrada);
      setResultApi(apiFiltrada);
    };
    getApi();
  }, [filterApi]);

  return (
    <MyContext.Provider value={ { resultApi, setFilterApi } }>
      { children }
    </MyContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
