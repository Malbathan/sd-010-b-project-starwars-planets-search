import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function InputFilterName() {
  const { filters, setFilters } = useContext(StarWarsContext);

  function handleSearchInputName({ target }) {
    const newValue = target.value;
    setFilters({
      ...filters,
      filterByName: {
        name: newValue,
      } });
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
          onChange={ handleSearchInputName }
        />
      </label>
    </div>
  );
}

export default InputFilterName;
