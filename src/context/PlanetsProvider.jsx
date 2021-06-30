import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const filters = {
    filterByName: { name: '' },
    filterByNumericValues: [],
  };
  const [multipleFilters, setMultipleFilters] = useState(filters);

  // { filterByName: {name: ''} }
  // {
  //   filters: {
  //     filterByName: {
  //       name: ''
  //     },
  //     filterByNumericValues: [
  //       {
  //         column: 'population',
  //         comparison: 'maior que',
  //         value: '100000',
  //       },
  //       {
  //         column: 'diameter',
  //         comparison: 'menor que',
  //         value: '8000',
  //       }
  //     ]
  //   }
  // }

  const addData = (planets) => {
    setData(planets);
  };

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      addData(results);
    };
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider
      value={
        { data, addData, multipleFilters, setMultipleFilters }
      }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

/* Consultei a informação postada no slack por Fioravante Chiozzi
https://trybecourse.slack.com/archives/C01LCSLCZ8D/p1624650806499700?thread_ts=1624650488.498500&cid=C01LCSLCZ8D
Stack Overflow
https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children */

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  // children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
