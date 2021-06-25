import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { handleNameSearch, nameSearch } = useContext(PlanetsContext);
  return (
    <form>
      <label htmlFor="name-filter">
        Name:
        <input
          type="text"
          data-testid="name-filter"
          id="name-filter"
          value={ nameSearch }
          onChange={ handleNameSearch }
        />
      </label>
    </form>
  );
}

export default Filter;
