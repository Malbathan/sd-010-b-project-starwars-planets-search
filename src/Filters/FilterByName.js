import React, { useContext } from 'react';
import AppContext from '../contextApi/Context';

export default function FilterByName() {
  const { listOfContext: { state, setstate } } = useContext(AppContext);

  function filterName(param) {
    setstate({
      ...state,
      filterByName: {
        name: param,
      },
    });
  }

  return (
    <div>
      <label htmlFor="input-filter-name">
        <input
          data-testid="name-filter"
          id="input-filter-name"
          name="input-filter-name"
          type="text"
          onChange={ (e) => filterName(e.target.value) }
        />
      </label>
    </div>
  );
}
