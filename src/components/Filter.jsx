import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { handleChangeText, textFilter } = useContext(PlanetsContext);
  return (
    <form>
      <label htmlFor="name-filter">
        Name:
        <input
          type="text"
          data-testid="name-filter"
          id="name-filter"
          value={ textFilter }
          onChange={ handleChangeText }
        />
      </label>
    </form>
  );
}

export default Filter;
