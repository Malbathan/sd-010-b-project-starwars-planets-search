import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function InputFilterName() {
  const { filters, setFilters } = useContext(StarWarsContext);

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
          data-testid="name-filter"
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

export default InputFilterName;
