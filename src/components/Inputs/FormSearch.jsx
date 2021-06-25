import React, { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function FormSearch() {
  const { setFilters } = useContext(StarWarsContext);
  const [inputsSearch, setInputSearch] = useState({
    column: '',
    comparison: '',
    value: 0,
  });

  function handleFilterByNumericValues(event) {
    event.preventDefault();
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [inputsSearch],
    }));
  }

  function handleOnChangeInputs(event) {
    const { name, value } = event.target;
    setInputSearch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form>
      <select
        value={ inputsSearch.column }
        name="column"
        id="column"
        data-testid="column-filter"
        onChange={ handleOnChangeInputs }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        value={ inputsSearch.comparison }
        name="comparison"
        id="comparison"
        data-testid="comparison-filter"
        onChange={ handleOnChangeInputs }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        value={ inputsSearch.value }
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ handleOnChangeInputs }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleFilterByNumericValues }
      >
        Buscar
      </button>
    </form>
  );
}

export default FormSearch;
