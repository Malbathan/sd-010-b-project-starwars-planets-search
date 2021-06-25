import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { getFilter, filter } = useContext(PlanetContext);

  return (
    <section>
      <input
        value={ filter.filterByName.name }
        onChange={ getFilter }
        data-testid="name-filter"
      />
    </section>
  );
}

export default Filter;
