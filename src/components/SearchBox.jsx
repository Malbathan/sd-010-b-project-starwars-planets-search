import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBox() {
  const { setFilterName } = useContext(PlanetContext);

  return (
    <section>
      <input data-testid='name-filter' onChange={ ({ target }) => setFilterName(target.value)} />
    </section>
  );
}

export default SearchBox;