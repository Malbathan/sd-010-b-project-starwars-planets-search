import React, { useContext } from 'react';

import DataContext from '../context/DataContext';

function Header() {
  const { setFilters, setIsFilterByNumericValues } = useContext(DataContext);

  function handleChange({ target: { value } }) {
    if (value.length > 0) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        filterByName: { name: value },
      }));
    }

    if (value.length === 0) {
      setFilters((prevFilters) => ({ ...prevFilters, filterByName: { name: '' } }));
    }
  }

  function filterByNumber({ target: { name, value } }) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByNumericValues: [{
        ...prevFilters.filterByNumericValues[0],
        [name]: value,
      }],
    }));
  }

  return (
    <header>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="filtro"
        name="name"
        onChange={ handleChange }
      />
      <select data-testid="column-filter" name="column" onChange={ filterByNumber }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ filterByNumber }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        min="0"
        name="value"
        onChange={ filterByNumber }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setIsFilterByNumericValues(true) }
      >
        Filtrar
      </button>
    </header>
  );
}

export default Header;
