// video referencia pra fazer o filtro https://www.youtube.com/watch?v=Q8JyF3wpsHc por nome
import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function renderInputText(setSearch) {
  return (
    <label htmlFor="planet">
      Filter By Planets
      <input
        data-testid="name-filter"
        name="planet"
        type="text"
        onChange={ (e) => setSearch(e.target.value) }
      />
    </label>
  );
}

const FilterByText = () => (
  <StarWarsContext.Consumer>
    {
      (({ setSearch }) => renderInputText(setSearch))
    }
  </StarWarsContext.Consumer>
);

export default FilterByText;
