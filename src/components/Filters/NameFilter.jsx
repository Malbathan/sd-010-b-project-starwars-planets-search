import React, { useContext } from 'react';

import PlanetsContext from '../../context/PlanetsContext';

function NameFilter() {
  const { changeNameToFilter } = useContext(PlanetsContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target: { value } }) => changeNameToFilter(value) }
    />
  );
}

export default NameFilter;
