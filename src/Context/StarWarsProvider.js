import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';
import StarWarsAPI from '../Services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    async function api() {
      const obj = await StarWarsAPI();
      obj.results.map((object) => delete object.residents);
      setData(obj.results);
      setLoading(false);
    }
    api();
  }, []);

  function searchPlanet() {
    const { filterByName: { name } } = filters;
    if (name) {
      setNewData(data.filter((planet) => planet.name.includes(name)));
    } else {
      setNewData(data);
    }
  }


  const store = {
    data,
    loading,
    filter,
    searchPlanet,
  };

  return (
    <MyContext.Provider value={ store }>
      { children }
    </MyContext.Provider>
  );
}

StarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
