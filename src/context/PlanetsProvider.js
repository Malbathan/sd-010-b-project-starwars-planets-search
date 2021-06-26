import React from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  return (
    <PlanetsContext.Provider value={ {} }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
