import React, { useContext } from 'react';
import myContext from '../context/myContext';

function SearchBar() {
  const { setFilterByName } = useContext(myContext);

  function handleFilterByName({ target: { value } }) {
    setFilterByName({ name: value });
  }

  return (
    <label htmlFor="planet-search-input">
      Procurar planeta
      <input
        type="text"
        id="planet-search-input"
        data-testid="name-filter"
        onChange={ handleFilterByName }
      />
    </label>
  );
}

export default SearchBar;
