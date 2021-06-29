import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import starwarsAPI from '../services/StarwarsAPI';

const starwarsContext = createContext();

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilter] = useState({
    filterByname: {
      name: '',
    },
  });

  useEffect(() => {
    async function resultAPI() {
      const { results } = await starwarsAPI();
      results.map((obj) => delete obj.residents);
      setData(results);
      setLoading(false);
    }
    resultAPI();
  }, []);

  const store = {
    loading,
    data,
    filters,
    setFilter,
  };

  return (
    <starwarsContext.Provider value={ store }>
      { children }
    </starwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { starwarsContext, StarwarsProvider };
