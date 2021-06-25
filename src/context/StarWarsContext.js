import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    function fetchPlanets() {
      fetch(url)
        .then((response) => response.json())
        .then(({ results }) => {
          const filteredColumns = results.map((planet) => {
            delete planet.residents;
            return planet;
          });
          setPlanets(filteredColumns);
          setColumns(Object.keys(filteredColumns[0]));
          setIsFetching(false);
        });
    }
    fetchPlanets();
  }, []);

  const context = {
    planets,
    columns,
    isFetching,
    setName,
    setFilterByNumericValues,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
    },
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export { StarWarsContext, StarWarsProvider as Provider };
