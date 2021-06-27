import React, { useContext } from 'react';
import DataContext from '../../../context';

function Filtros() {
  const { filtro, setFiltro, setFiltrar } = useContext(DataContext);
  const {
    column: Rcolumn,
    comparison: Rcomparison,
    value: Rvalue,
  } = filtro.filterByNumericValues[0];

  const handleValues = (event) => {
    const { value, name } = event.target;
    if (name === 'column') {
      setFiltro(() => ({
        filterByName: filtro.filterByName,
        filterByNumericValues: [
          {
            [name]: value,
            comparison: Rcomparison,
            value: Rvalue,
          },
        ],
      }
      ));
    } if (name === 'comparison') {
      setFiltro(() => ({
        filterByName: filtro.filterByName,
        filterByNumericValues: [
          {
            column: Rcolumn,
            [name]: value,
            value: Rvalue,
          },
        ],
      }));
    } if (name === 'value') {
      setFiltro(() => ({
        filterByName: filtro.filterByName,
        filterByNumericValues: [
          {
            column: Rcolumn,
            comparison: Rcomparison,
            [name]: value,
          },
        ],
      }));
    }
  };

  const limpaFiltroNome = (event) => {
    event.preventDefault();
    const { filterByName } = filtro;
    setFiltro(() => ({
      filterByName,
      filterByNumericValues: [{
        column: 'population',
        comparision: 'maior que',
        value: '' }],
    }));
    setFiltrar(false);
  };

  return (
    <form>
      <label htmlFor="filterByColumn">
        Filtro:
        {' '}
        <select
          name="column"
          value={ Rcolumn }
          data-testid="column-filter"
          onChange={ handleValues }
        >
          <option value="population"> population </option>
          <option value="orbital_period"> orbital_period </option>
          <option value="diameter"> diameter </option>
          <option value="rotation_period"> rotation_period </option>
          <option value="surface_water"> surface_water </option>
        </select>
      </label>
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ Rcomparison }
        onChange={ handleValues }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        value={ Rvalue }
        type="number"
        name="value"
        onChange={ handleValues }
        data-testid="value-filter"
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ (e) => {
          e.preventDefault();
          setFiltrar(true);
        } }
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
