import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Search() {
  const { data, setDataSearch } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const result = data.filter((planet) => planet.name.includes(target.value));
    setDataSearch(result);
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Buscar"
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </header>
  );
}

export default Search;
