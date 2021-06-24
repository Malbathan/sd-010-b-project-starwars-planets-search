import React, { useState, useEffect } from 'react';
import giveMePlanets from '../services/giveMePlanets';
import planetsContext from '../contextAPI/planetsContext';

function ProviderContext({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const makeRequest = () => giveMePlanets().then(({ results }) => setPlanets(results));
    makeRequest();
  }, []);

  const state = {
    planets,
    setPlanets,
  };

  return (
    <planetsContext.Provider value={ state }>
      { children }
    </planetsContext.Provider>
  );
}

export default ProviderContext;
