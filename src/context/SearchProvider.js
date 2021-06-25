import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import SearchContext from './SearchContext';

function SearchProvider({ children }) {
  const [data, setData] = useState([]);

  const [filtraNome, setFiltraNome] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  });

  return (
    <SearchContext.Provider value={ { data, setData, filtraNome, setFiltraNome } }>
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchProvider;
