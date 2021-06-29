import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState(
    [
      {
        // caloumn: '',
        // comparison: '',
        // value: '',
      },
    ],
  );
  // const [filters, setFilters] = useState({
  //   filterByName: {
  //     name: '',
  //   },
  //   filterByNumericValues: [
  //     {
  //       caloumn: '',
  //       comparison: '',
  //       value: '',
  //     },
  //   ],
  // });

  useEffect(() => {
    const getPlanets = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((planets) => planets.json())
        .then((r) => setData(r.results));
    };
    getPlanets();
  }, []);

  function filterName({ target }) {
    setFilterByName({
      ...filterByName,
      [target.name]: target.value,
    });
  }

  function filterNumericValues({ target }) {
    setFilterByNumericValues(
      [
        {
          ...filterByNumericValues[0],
          [target.name]: target.value,
        },
      ],
    );
  }
  // useEffect(() => {
  //   setFilters({
  //     ...filterByName,
  //     ...filterByNumericValues,
  //   });
  // }, [filterByName, filterByNumericValues]);

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
    // filters,
    setData,
    filterByName,
    filterByNumericValues,
    filterName,
    filterNumericValues,
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
