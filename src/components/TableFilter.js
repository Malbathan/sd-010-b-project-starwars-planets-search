import React, { useContext } from 'react';
import ContextStarWars from '../context/ContextStarWars';

function TableFilter() {
  const {
    filters,
    addNameFilter,
    addSelectFilter,
    listFilter,
    comparasionColum,
    setComparasionColum,
    removeFilter,
  } = useContext(ContextStarWars);

  const filterColum = (event) => {
    event.preventDefault();

    addSelectFilter({
      column: comparasionColum.column,
      comparison: comparasionColum.coparasion,
      value: comparasionColum.value,
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setComparasionColum({
      ...comparasionColum,
      [name]: value,
    });
  };

  return (
    <div className="TableFilter">
      <div className="addFilters">
        <form>
          <input
            type="text"
            placeholder="Filtrar por nome"
            data-testid="name-filter"
            value={ filters.filterByName.name }
            onChange={
              ({ target: { value } }) => addNameFilter('filterByName', value)
            }
          />
        </form>

        <form onSubmit={ filterColum }>
          <select
            name="column"
            data-testid="column-filter"
            onChange={ handleChange }
            value={ comparasionColum.column }
          >
            {listFilter.map((filter) => (
              <option key={ filter } value={ filter }>{filter}</option>
            ))}
          </select>

          <select
            name="coparasion"
            data-testid="comparison-filter"
            onChange={ handleChange }
            value={ comparasionColum.comparison }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>

          <input
            name="value"
            type="number"
            data-testid="value-filter"
            min="0"
            value={ comparasionColum.value }
            onChange={ handleChange }
          />

          <button type="submit" data-testid="button-filter">filtrar</button>
        </form>
      </div>

      <div className="selected-filters">
        <h3>Filtros Selecionados</h3>
        {filters.filterByNumericValues.map((obj) => (
          <div key={ obj.column } data-testid="filter">
            {`${obj.column}  ${obj.comparison}  ${obj.value}`}
            <button
              type="button"
              onClick={ () => removeFilter(obj.column) }
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableFilter;
