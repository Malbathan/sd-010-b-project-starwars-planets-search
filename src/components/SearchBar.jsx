import React, { useContext } from 'react';
import ContextTabela from '../context/ContextTabela';

function SearchBar() {
  const { filters, setFilters } = useContext(ContextTabela);
  const handleChange = ({ target }) => {
    setFilters({
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
      <input type="text" id="search" onChange={ (e) => handleChange(e) } />
    </label>
  );
}

export default SearchBar;
