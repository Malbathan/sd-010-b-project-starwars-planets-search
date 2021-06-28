import React, { useContext } from 'react';
import StarWarsContext from '../hooks/StarWarsContext';
import RenderRowTable from './RenderRowTable';

const CHAVE_CONTEXT = 'filterByNumericValues';

export default function FilterNumber() {
  const { setFilters, filters, data } = useContext(StarWarsContext);

  const changeSetFilters = ({ target }) => {
    const copia = { ...filters };
    copia[CHAVE_CONTEXT][0] = { ...copia[CHAVE_CONTEXT][0], [target.id]: [target.value] };
    setFilters(copia);
  };

  const clickPesquisar = (e) => {
    e.preventDefault();
    RenderRowTable(data.results, true);
  };

  return (
    <div>
      <label htmlFor="column">
        Select columns:
        <select
          id="column"
          data-testid="column-filter"
          onChange={ changeSetFilters }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Faixa:
        <select
          data-testid="comparison-filter"
          id="comparison"
          onChange={ changeSetFilters }
        >
          <option value=">">maior que</option>
          <option value="<">menor que</option>
          <option value="===">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          data-testid="value-filter"
          id="value"
          onChange={ changeSetFilters }
        />
      </label>
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ clickPesquisar }
      >
        Pesquisar
      </button>
    </div>
  );
}
