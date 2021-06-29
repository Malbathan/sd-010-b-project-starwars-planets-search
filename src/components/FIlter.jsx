import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { setFilterByName, filter } = useContext(PlanetContext);

  const searchByText = ({ target: { value } }) => {
    setFilterByName({ ...filter, filterByName: { name: value } });
  };

  return (
    <section>
      <input
        value={ filter.filterByName.name }
        onChange={ searchByText }
        data-testid="name-filter"
      />
    </section>
  );
}

export default Filter;
