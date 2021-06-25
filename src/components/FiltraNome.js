import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

function FiltraNome() {
  const { filtraNome, setFiltraNome } = useContext(SearchContext);

  const filtraPeloNome = ({ target }) => {
    setFiltraNome({ ...filtraNome, filterByName: { name: target.value } });
  };

  return (
    <form>
      <label htmlFor="filterByName">
        Filtrar pelo Nome:
        {' '}
        <input
          type="text"
          data-testid="name-filter"
          name="filterByName"
          onChange={ filtraPeloNome }
        />
      </label>
    </form>
  );
}

export default FiltraNome;
