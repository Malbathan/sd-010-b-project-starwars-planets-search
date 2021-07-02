import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import MyContext from './myContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [setText] = useState('');

  async function fetchFromAPi() {
    setIsFetching(true);
    await fetchApi().then(
      (response) => setData(response.results),
    )
      .finally(() => setIsFetching(false));
  }

  useEffect(() => {
    fetchFromAPi();
  }, []);

  const contextStarWars = {
    isFetching,
    data,
    setText,
  };

  return (
    <MyContext.Provider
      value={ contextStarWars }
    >
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
