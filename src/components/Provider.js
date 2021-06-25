import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([{}]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchApiStarwars = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then(({ results }) => setData(results));
    };

    fetchApiStarwars();
  }, [fetching]);

  const contextValue = {
    data,
    setData,
    fetching,
    setFetching,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
