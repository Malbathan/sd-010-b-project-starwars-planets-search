import React, { useContext } from 'react';
import ApiContext from '../Context/ApiContext';

function SetFilter() {
  const { filterByName } = useContext(ApiContext);
  return (
    <fieldset>
      <label htmlFor="lala">
        <input
          data-testid="name-filter"
          onChange={ filterByName }
          id="lala"
          type="text"
        />
        Filtro dos planetas
      </label>
    </fieldset>
  );
}

export default SetFilter;
