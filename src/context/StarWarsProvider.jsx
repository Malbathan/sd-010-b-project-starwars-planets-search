import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import requestApi from '../services/apiService';
import StarWarsContext from './StarWarsContext';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '0',
    },
  ],
};

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initialState);

  useEffect(() => {
    async function getStarWars() {
      const results = await requestApi();
      setData(results);
    }
    getStarWars();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data, filters, setFilters } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default StarWarsProvider;
