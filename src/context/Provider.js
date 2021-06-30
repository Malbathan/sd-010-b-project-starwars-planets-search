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

  const column1 = ['population', 'orbital_period', 'diameter'];
  const column2 = ['rotation_period', 'surface_water'];
  const columns = [...column1, ...column2];

  const filterByNumeric = () => {
    for (let i = 0; i < columns.length; i += 1) {
      // for (let j = 0; j < comparisons.length; j += 1) {
      if (filterByNumericValues[0].column === columns[i]
          && filterByNumericValues[0].comparison === 'maior que'
            && filterByNumericValues[0].value) {
        const getData = data
          .filter((d) => parseInt(d[columns[i]], 10)
          > parseInt(filterByNumericValues[0].value, 10));
        setData(getData);
      }
      if (filterByNumericValues[0].column === columns[i]
          && filterByNumericValues[0].comparison === 'menor que'
            && filterByNumericValues[0].value) {
        const getData = data
          .filter((d) => parseInt(d[columns[i]], 10)
          < parseInt(filterByNumericValues[0].value, 10));
        setData(getData);
      }
      if (filterByNumericValues[0].column === columns[i]
          && filterByNumericValues[0].comparison === 'igual a'
            && filterByNumericValues[0].value) {
        const getData = data
          .filter((d) => parseInt(d[columns[i]], 10)
          === parseInt(filterByNumericValues[0].value, 10));
        setData(getData);
      }
      // }
    }
  };
  const myObj = {
    data,
    // filters,
    setData,
    filterByName,
    filterByNumericValues,
    filterByNumeric,
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
