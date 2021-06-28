import React, { useContext, useState } from 'react';
import StarWarsContext from '../hooks/StarWarsContext';
import RenderRowTable from './RenderRowTable';

export default function FilterNumber() {
  const { setFilters, filters, data } = useContext(StarWarsContext);
  const [filterNumeric, setFilterNumeric] = useState({});

  const changeSetFilters = ({ target }) => {
    setFilterNumeric({ ...filterNumeric, [target.id]: target.value });
  };

  const clickPesquisar = (e) => {
    e.preventDefault();
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filterNumeric],
      condicaoFilter: !filters.condicaoFilter });
    RenderRowTable(data.results,
      filters.filterByName, filters.filterByNumericValues, filters.condicaoFilter);
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
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
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
