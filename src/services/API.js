import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

// const StarWarsContext = createContext({});

function Planets({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  useEffect(() => {
    const searchPlanet = data.filter((planet) => planet.name.includes(search));
    setFilter(searchPlanet);
  }, [data, search]);

  function searchInput() {
    return (
      <form>
        <label htmlFor="planet-filter">
          <input
            type="text"
            onChange={ (event) => setSearch(event.target.value) }
            data-testid="name-filter"
            id="planet-filter"
          />
        </label>
      </form>
    );
  }

  const value = {
    data,
    filter,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      { searchInput() }
      {children}
    </StarWarsContext.Provider>
  );
}

Planets.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Planets;
