import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [planetNames, setplanetNames] = useState([]);
  const [nameSearch, setNameSearch] = useState('');

  const fetchAPI = () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
      .then((response) => response.json())
      .then((resp) => setplanetNames(resp.results));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleInputSearch = (event) => {
    setNameSearch(event.target.value);
    // const aux = planetNames;
    // console.log(aux);
    // console.log(planetNames);
    // planetNames.filter((planet) => {
    // const name = planet.name.toLowerCase();
    // const input = event.target.value.toLowerCase();
    // return
    // console.log(event.target.value.name.includes(nameSearch));
    // };
    // return planetNames.filter((filter) => filter.name.includes(nameSearch));
    // setplanetNames(planetsSearch);
    // if (nameSearch === '' || planetsSearch === []) {
    //   setplanetNames(aux);
    // }
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
