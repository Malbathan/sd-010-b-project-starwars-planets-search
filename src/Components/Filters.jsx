import React, { useState, useContext } from 'react';
import DataContext from '../Context/DataContext';

function Filters() {
  const filterByName = {
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: '',
    },
  };

  const { filters: filtersGlobal,
    setFilters: setFiltersGlobal } = useContext(DataContext);

  const [filters, setFilters] = useState(filterByName);
  const { filterByNumericValues: { value }, filterByNumericValues } = filters;

  const onChangeName = ({ target }) => (
    setFiltersGlobal({ ...filtersGlobal, filterByName: target.value })
  );

  const onChangeNumeric = ({ target }, type) => {
    let newValue = target.value;
    if (type === 'value') { newValue = target.value.replace(/[^0-9]/, ''); }
    setFilters({
      ...filters,
      filterByNumericValues: {
        ...filterByNumericValues,
        [type]: newValue,
      },
    });
  };

  const onClickButton = () => {
    const { filterByNumericValues: filterByNumericValuesGlobal } = filtersGlobal;
    setFiltersGlobal({
      ...filtersGlobal,
      filterByNumericValues: [...filterByNumericValuesGlobal, filterByNumericValues],
    });
  };

  const renderSelectOptions = () => {
    const { filterByNumericValues: globalFilters } = filtersGlobal;
    const categories = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    const renderCategories = categories
      .filter((category) => !globalFilters
        .find((filter) => filter.column === category))
      .map((category, index) => <option key={ index }>{ category }</option>);
    return renderCategories;
  };

  const excludeFilter = ({ target }) => {
    const { filterByNumericValues: globalFilters } = filtersGlobal;
    const newFilterArray = globalFilters.filter(({ column }) => column !== target.name);
    setFiltersGlobal({
      ...filtersGlobal,
      filterByNumericValues: newFilterArray,
    });
  };

  const renderFilters = () => {
    const { filterByNumericValues: globalFilters } = filtersGlobal;
    return globalFilters.map(({ column, comparison, value: globalValue }) => (
      <section key={ column } data-testid="filter">
        <span>{`${column} ${comparison} ${globalValue}` }</span>
        <button
          type="button"
          name={ column }
          onClick={ (e) => excludeFilter(e) }
        >
          X
        </button>
      </section>
    ));
  };

  return (
    <form>
      <h2>Filtros</h2>
      <label htmlFor="name">
        Digite um nome
        <input
          type="text"
          id="name"
          onChange={ onChangeName }
          data-testid="name-filter"
        />
      </label>
      <label htmlFor="category">
        Categoria
        <select
          id="category"
          data-testid="column-filter"
          onChange={ (e) => onChangeNumeric(e, 'column') }
        >
          { renderSelectOptions() }
        </select>
      </label>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => onChangeNumeric(e, 'comparison') }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="text"
        data-testid="value-filter"
        value={ value }
        onChange={ (e) => onChangeNumeric(e, 'value') }
      />
      <button
        type="button"
        onClick={ onClickButton }
        data-testid="button-filter"
        disabled={ value === '' }
      >
        Filtrar
      </button>
      <h4>Filtros aplicados</h4>
      { renderFilters() }
    </form>
  );
}

export default Filters;
