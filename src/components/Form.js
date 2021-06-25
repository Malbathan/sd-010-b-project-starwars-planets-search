import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Form() {
  const { handleNameSearch, nameSearch } = useContext(PlanetsContext);

  return (
    <div>
      <label htmlFor="name">
        Planet name:
        <input
          type="text"
          data-testid="name-filter"
          value={ nameSearch }
          onChange={ handleNameSearch }
        />
      </label>
    </div>
  );
}

export default Form;
