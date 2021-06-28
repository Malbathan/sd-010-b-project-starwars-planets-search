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

  numericFilter.forEach((el) => {
    const index = numberValuesOptions.indexOf(el.column);
    delete numberValuesOptions[index];
  });

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
            {numberValuesOptions.map((el, idx) => (
              <option key={ idx } defaultValue>{el}</option>
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
              return <option key={ idx } defaultValue>{el}</option>;
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
          onClick={ () => handleFilter(state) }
        >
          Filtrar
        </button>
      </form>
      <section>
        <h3>Filtros</h3>
        {wasFilteredByNumber && renderFilters() }
      </section>
    </>
  );
}

export default Filter;
