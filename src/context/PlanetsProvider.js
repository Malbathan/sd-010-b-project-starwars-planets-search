import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState();
  fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then(() => setData(data));
  return (
    <PlanetsContext.Provider value={ {} }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
