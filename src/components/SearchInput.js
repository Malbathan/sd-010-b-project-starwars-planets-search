import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function SearchInput() {
  const {
    state,
    state: { filterByName },
    setState,
  } = useContext(GlobalContext);

  return (
    <label htmlFor="input">
      Digite:
      <input
        data-testid="name-filter"
        id="input"
        type="text"
        value={ filterByName }
        onChange={ ({ target: { value } }) => setState({
          ...state,
          filterByName: value,
        }) }
      />
    </label>
  );
}

export default SearchInput;
