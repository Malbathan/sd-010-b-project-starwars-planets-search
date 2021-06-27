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

  const options = [
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
    ['maior que', 'igual a', 'menor que'],
  ];

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
          {
            options[0].map((item, index) => (
              <option key={ index } value={ item }>{item}</option>))
          }
        </select>
      </label>
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ Rcomparison }
        onChange={ handleValues }
      >
        {
          options[1].map((item, index) => (
            <option key={ index } value={ item }>{item}</option>))
        }
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
