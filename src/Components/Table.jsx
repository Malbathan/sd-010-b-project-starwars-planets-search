import React, { useContext } from 'react';

import ApiContext from '../Context/ApiContext';

function Table() {
  const { planetsInfo } = useContext(ApiContext);

  if (!planetsInfo) return (<p>Loading...</p>);

  return (
    <table border="2">
      { planetsInfo.planetHeaders }
      { planetsInfo.filteredPlanets }
    </table>
  );
}

export default Table;
