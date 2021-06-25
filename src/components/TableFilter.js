import React, { useContext, useState } from 'react';
import ContextStarWars from '../context/ContextStarWars';

function TableFilter() {
  const { filters, addNameFilter, addSelectFilter } = useContext(ContextStarWars);
  const [comparasionColum, setComparasionColum] = useState({
    column: 'population',
    coparasion: 'maior que',
    value: 0,
  });

  const filterColum = (event) => {
    event.preventDefault();

    addSelectFilter({
      column: comparasionColum.column,
      comparison: comparasionColum.coparasion,
      value: comparasionColum.value,
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    console.log(name);
    setComparasionColum({
      ...comparasionColum,
      [name]: value,
    });
  };

  return (
    <div className="TableFilter">
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
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
  );
}

export default TableFilter;
