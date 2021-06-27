import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const nameInput = (func) => (
  <input
    type="text"
    id="name"
    data-testid="name-filter"
    onChange={ func }
  />
);

function SearchBar() {
  const { handleName } = useContext(PlanetsContext);

  return (
    nameInput(handleName)
  );
}

export default SearchBar;
