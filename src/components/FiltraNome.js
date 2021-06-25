import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

function FiltraNome() {
  const { filtraNome, setFiltraNome } = useContext(SearchContext);

  const filtraPeloNome = ({ target }) => {
    setFiltraNome({ ...filtraNome, filterByName: { name: target.value } });
  };

  const limpaFiltroNome = () => {
    setFiltraNome({ ...filtraNome, filterByName: { name: '' } });
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
      <button type="button" data-testid="filter" onClick={ limpaFiltroNome }>
        X
      </button>
    </form>
  );
}

export default FiltraNome;
