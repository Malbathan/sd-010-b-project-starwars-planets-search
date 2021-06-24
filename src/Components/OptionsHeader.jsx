import React, { useContext } from 'react';
import SwContext from '../contexts/swContext';

const OptionsHeader = () => {
  const { setFilterName, filters: { filterByName: { name } } } = useContext(SwContext);

  return (
    <div>
      <div>
        <label htmlFor="filter">
          Filter by name
          <input
            data-testid="name-filter"
            id="filter"
            name="filter"
            type="text"
            value={ name }
            onChange={ ({ target: { value } }) => setFilterName(value) }
          />
        </label>
      </div>
    </div>
  );
};

export default OptionsHeader;
