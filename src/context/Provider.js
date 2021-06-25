import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  useEffect(() => {
    const getPlanets = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((planets) => planets.json())
        .then((r) => setData(r.results));
    };
    getPlanets();
  }, []);

  //   useEffect(() => {
  //     const getPlanets = async () => {
  //       const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
  //         .then((planets) => planets.json());
  //       setData(results);
  //     };
  //     getPlanets();
  //   }, []);
  //   console.log(data)
  const myObj = {
    data,
    filters,
    setData,
    setFilters,
  };
  return (
    <Context.Provider value={ { ...myObj } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
