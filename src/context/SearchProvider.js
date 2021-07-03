import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import SearchContext from './SearchContext';

function SearchProvider({ children }) {
  const [data, setData] = useState([]);

  const [filtraNome, setFiltraNome] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
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
