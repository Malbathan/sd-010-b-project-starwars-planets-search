import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/Api/StarWarsApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const setState = async () => {
    const fetch = await fetchApi();
    setData(fetch);
    // console.log(fetch);
  };

  useEffect(setState, []);

  const context = {
    data,
  };
  console.log(context);
  return (
    <StarWarsContext.Provider
      value={ context }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
