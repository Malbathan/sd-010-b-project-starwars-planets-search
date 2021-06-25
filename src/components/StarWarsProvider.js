import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [planetNames, setplanetNames] = useState([]);
  const [nameSearch, setNameSearch] = useState('');
  const [filter, setFilter] = useState({});
  // const [planetsFiltered, setPlanetsFiltered] = useState([]);

  const fetchAPI = () => {
    // const apiStarWars = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';
    fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
      .then((response) => response.json())
      .then((resp) => setplanetNames(resp.results));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleInputSearch = (event) => {
    setNameSearch(event.target.value);
    // const planetsSearch = planetNames.filter((planet) => {
    //   const name = planet.name.toLowerCase();
    //   const input = event.target.value.toLowerCase();
    //   return name.includes(input);
    // });

    // const filterByName = {
    //   name: event.target.value,
    // };

    // setFilter({ ...filter, filterByName });
    // setplanetNames(planetsSearch);
    // setPlanetsFiltered(planetsSearch);
  };

  const values = {
    planetNames,
    handleInputSearch,
    filters: {
      filterByName: {
        name: nameSearch,
      },
    },
  };

  return (
    <div>
      <StarWarsContext.Provider value={ values }>
        {children}
      </StarWarsContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
