import React from 'react';
import PlanetContext from './PlanetContext';

function ContextProvider({ children }) {
  return (
    <PlanetContext.Provider value={ {/* aqui jás um dado */} }>
      {children}
    </PlanetContext.Provider>
  );
}

export default ContextProvider;
