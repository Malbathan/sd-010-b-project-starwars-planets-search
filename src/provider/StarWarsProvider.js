import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import getAPI from '../service/api';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  const context = { data, setData, loading, setLoading, filters, setFilters };

  // async function fetchApi() {
  //   const planets = await getAPI();
  //   planets.map((planet) => delete planet.residents);
  //   setData(planets);
  //   setLoading(true);
  // }

  // useEffect(() => { fetchApi(); });

  useEffect(() => {
    async function fetchApi() {
      const planets = await getAPI();
      planets.map((planet) => delete planet.residents);
      setData(planets);
      setLoading(true);
    } fetchApi();
  }, []);

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
