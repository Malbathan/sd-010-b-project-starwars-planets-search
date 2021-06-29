import React, { useContext } from 'react';
import ContextTabela from '../context/ContextTabela';

function SearchBar() {
  const { filters, setFilter } = useContext(ContextTabela);
  const handleChange = ({ target }) => {
    setFilter({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  };

  return (
    <label htmlFor="search">
      Search:
      {' '}
      <input
        type="text"
        id="search"
        data-testid="name-filter"
        onChange={ (e) => handleChange(e) }
      />
    </label>
  );
}

export default SearchBar;
