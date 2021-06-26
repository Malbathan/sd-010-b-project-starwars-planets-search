import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { setName } = useContext(PlanetContext);

  return (
    <form className="form-filter">
      <input
        type="text"
        name="input-filter"
        placeholder="Pesquisar"
        data-testid="name-filter"
        onChange={ (e) => setName(e.target.value) }
      />
    </form>
  );
}

export default Filter;
