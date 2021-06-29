import React, { useContext, useState } from 'react';

import DataContext from '../context/DataContext';

function Header() {
  const INITIAL_STATE = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };
  const defaultOptionColumn = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const [filtered, setFiltered] = useState(INITIAL_STATE);
  const [optionColumns, setOptionColumns] = useState(defaultOptionColumn);
  const {
    setFilters,
    setIsFilterByNumericValues,
    countIndex,
    setCountIndex,
  } = useContext(DataContext);

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
    setFiltered({ ...filtered, [name]: value });
  }

  function disableOption() {
    const newList = optionColumns.filter((option) => option !== filtered.column);
    setOptionColumns(newList);
  }

  function sendFilter(localState) {
    setIsFilterByNumericValues(true);
    setCountIndex(countIndex + 1);
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByNumericValues: [...prevFilters.filterByNumericValues, localState],
    }));
    setFiltered(INITIAL_STATE);
    disableOption();
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
      <select
        data-testid="column-filter"
        name="column"
        onChange={ filterByNumber }
        value={ filtered.column }
      >
        {
          optionColumns.map((option, index) => (
            <option key={ index }>{option}</option>
          ))
        }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ filterByNumber }
        value={ filtered.comparison }
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
        value={ filtered.value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => sendFilter(filtered) }
      >
        Filtrar
      </button>
    </header>
  );
}

export default Header;
