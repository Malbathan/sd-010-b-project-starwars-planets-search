import React, { useContext, useState } from 'react';
import SearchContext from '../context/SearchContext';

function Filtros() {
  const [column, setColumn] = useState('population');
  const [comparision, setComparision] = useState('maior que');
  const [values, setValues] = useState(0);
  const { filtraNome, setFiltraNome } = useContext(SearchContext);

  const filtraDados = (event) => {
    event.preventDefault();
    setFiltraNome({
      ...filtraNome,
      filterByNumericValues: [{ column, comparision, value: values }] });
  };

  const handleColumn = (event) => {
    const { value } = event.target;
    setColumn(value);
  };

  const handleComparision = (event) => {
    const { value } = event.target;
    setComparision(value);
  };

  const handleValues = (event) => {
    const { value } = event.target;
    setValues(value);
  };

  const limpaFiltroNome = () => {
    setFiltraNome({
      ...filtraNome,
      filterByNumericValues: [{
        column: 'population',
        comparision: 'maior que',
        value: 0 }] });
  };

  return (
    <form onSubmit={ filtraDados }>
      <label htmlFor="filterByColumn">
        Filtro:
        {' '}
        <select
          name="setColumn"
          data-testid="column-filter"
          onChange={ handleColumn }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <select
        name="setComparision"
        data-testid="comparison-filter"
        onChange={ handleComparision }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        name="values"
        onChange={ handleValues }
        data-testid="value-filter"
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ filtraDados }
      >
        Filtra
      </button>
      <button type="button" data-testid="filter" onClick={ limpaFiltroNome }>
        X
      </button>
    </form>
  );
}

export default Filtros;
