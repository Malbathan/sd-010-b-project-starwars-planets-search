import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filter, setFilter, removeFilter } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [newFilter, setNewFilter] = useState([]);

  const handleChangeName = ({ target }) => {
    setFilter({ ...filter, filterByName: { [target.name]: target.value } });
  };

  const handleChangeNumeric = ({ target }) => {
    if (target.name === 'column') {
      setColumn(target.value);
    }
    if (target.name === 'comparison') {
      setComparison(target.value);
    }
    if (target.name === 'value') {
      setValue(target.value);
    }
    // setFilter({ ...filter, filterByNumericValues: { [target.name]: target.value } });
  };

  const clickFilter = () => {
    const newvalues = { column, comparison, value };
    setFilter({ ...filter,
      filterByNumericValues: [...filter.filterByNumericValues, newvalues] });
    setNewFilter([...newFilter, [`${column} ${comparison} ${value}`]]);
  };

  const renderNameFilter = () => (
    <div>
      <label htmlFor="filterByName">
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          id="filterByName"
          onChange={ handleChangeName }
        />
      </label>
    </div>
  );

  const renderComparer = () => (
    <section>
      <select
        data-testid="column-filter"
        name="column"
        id="filterByNumeric"
        onChange={ handleChangeNumeric }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        id="filterByNumeric"
        onChange={ handleChangeNumeric }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        data-testid="value-filter"
        name="value"
        type="number"
        id="filterByNumeric"
        onChange={ handleChangeNumeric }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ clickFilter }
      >
        Filtrar
      </button>
    </section>
  );

  const renderFilters = () => (
    <section id="pai">
      {newFilter.map((filtro) => (
        <section id="lista" key={ filtro.index }>
          <p data-testid="filter">{filtro}</p>
          <button type="button" onClick={ () => removeFilter(column) }>x</button>
        </section>
      ))}
    </section>);

  return (
    <section>
      <h1>Olá guerra de estrelas</h1>
      {renderNameFilter()}
      {renderComparer()}
      {renderFilters()}
    </section>
  );
}

export default Filters;
