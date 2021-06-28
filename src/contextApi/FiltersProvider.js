import React, { useState } from 'react';
import RequisitionAPI from '../api/RequisitionAPI';

function FiltersProvider() {
  const { results } = RequisitionAPI();

  const [planetsName, setPlanetName] = useState({});

  const filterByName = () => {
    if (results) {
      setPlanetName(results.name);
    }
  };

  filterByName();

  console.log(planetsName);

  return (
    <div>
      ola
    </div>
  //   <planetsContext.Provider value={ state }>
  //   { children }
  // </planetsContext.Provider>
  );
}

export default FiltersProvider;
