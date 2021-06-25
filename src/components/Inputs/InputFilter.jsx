import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function InputFilter() {
  const { filters, setFilters } = useContext(StarWarsContext);

  console.log(filters);

  function handleSearchInput({ target }) {
    const newValue = target.value;
    setFilters({ filterByName: { name: newValue } });
  }

  const { filterByName: { name } } = filters;
  return (
    <div>
      <label htmlFor="planets">
        Nome do planeta:
        <input
          value={ name }
          id="planets"
          type="text"
          placeholder="Digite o nome do planeta"
          onChange={ handleSearchInput }
        />
      </label>
    </div>
  );
}

export default InputFilter;
