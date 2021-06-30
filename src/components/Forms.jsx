import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Forms() {
  const { filter, setFilter } = useContext(PlanetContext);

  function handler({ target }) {
    setFilter({
      ...filter,
      name: target.value,
    });
  }
  return (
    <div>
      <input
        onChange={ (event) => handler(event) }
        type="text"
        placeholder="Filtrar por nome"
        data-testid="name-filter"
      />
    </div>
  );
}

export default Forms;
