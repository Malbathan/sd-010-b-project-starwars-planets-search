import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FetchAPI from '../api/FetchAPI';
import AppContext from './Context';

const initialState = {
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
    filterByValue: [{
      column: '',
      comparison: '',
      value: '',
    }],
  },
};

function AuthProvider({ children }) {
  const { results } = FetchAPI();
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    setstate({
      ...state,
      data: results,
    });
  }, [results]);

  const listOfContext = {
    state,
    setstate,
  };

  return (
    <AppContext.Provider value={ { listOfContext } }>
      { children }
    </AppContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
