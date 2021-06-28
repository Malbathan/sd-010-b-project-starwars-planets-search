import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const numberValuesOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonFilters = [
  'maior que',
  'menor que',
  'igual a',
];

function Filter() {
  const {
    handleChangeText,
    textFilter,
    handleFilter,
    numericFilter,
    wasFilteredByNumber,
    columnOptions,
    disableFilters,
  } = useContext(PlanetsContext);

  const [state, setState] = useState({});

  const handleSelect = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const renderFilters = () => numericFilter.map((el, idx) => (
    <section key={ idx }>
      <span>{el.column}</span>
      <span>{el.comparison}</span>
      <span>{el.value}</span>
    </section>
  ));

  const updateColumnsOptions = () => {
    delete numberValuesOptions[state.column];
  };

  return (
    <>
      <form>
        <label htmlFor="name-filter">
          Nome:
          <input
            type="text"
            data-testid="name-filter"
            id="name-filter"
            value={ textFilter }
            onChange={ handleChangeText }
          />
        </label>
        <label htmlFor="column-filter">
          Filtrar por:
          <select
            name="column"
            id="column-filter"
            data-testid="column-filter"
            onChange={ handleSelect }
          >
            {columnOptions.map((el, idx) => (
              <option key={ idx }>{el}</option>
            ))}
          </select>
        </label>
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          onChange={ handleSelect }
        >
          {comparisonFilters.map((el, idx) => {
            if (idx === 0) {
              return <option key={ idx }>{el}</option>;
            }
            return <option key={ idx }>{el}</option>;
          })}
        </select>
        <input
          type="number"
          name="value"
          id="value-filter"
          data-testid="value-filter"
          onChange={ handleSelect }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            handleFilter(state);
            updateColumnsOptions();
          } }
        >
          Filtrar
        </button>
      </form>
      <section data-testid="filter">
        <h3>Filtros</h3>
        {wasFilteredByNumber && renderFilters() }
        <button type="button" onClick={ disableFilters }>Limpar filtros</button>
      </section>
    </>
  );
}

export default Filter;
