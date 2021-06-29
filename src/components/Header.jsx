import React, { useContext, useState } from 'react';
import MyContext from './MyContext';

function Header() {
  const { filters, setfilters } = useContext(MyContext);
  const [objFilter, setObjFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  return (
    <form>
      <label htmlFor="planet-filter">
        Filtro de Planetas:
        <input
          data-testid="name-filter"
          id="planet-filter"
          type="text"
          onChange={ (e) => {
            setfilters({ ...filters, filterByName: { name: e.target.value } });
          } }
        />
      </label>
      <label htmlFor="column">
        <select
          id="column"
          data-testid="column-filter"
          onChange={ (e) => {
            setObjFilter({ ...objFilter, column: e.target.value });
          } }
        >
          <option value="population">
            population
          </option>
          <option value="orbital_period">
            orbital_period
          </option>
          <option value="diameter">
            diameter
          </option>
          <option value="rotation_period">
            rotation_period
          </option>
          <option value="surface_water">
            surface_water
          </option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (e) => {
            setObjFilter({ ...objFilter, comparison: e.target.value });
          } }
        >
          <option>
            maior que
          </option>
          <option>
            menor que
          </option>
          <option>
            igual a
          </option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          id="value-filter"
          type="number"
          onChange={ (e) => {
            setObjFilter({ ...objFilter, value: e.target.value });
          } }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => {
          setfilters({ ...filters,
            filterByNumericValues: [...filters.filterByNumericValues, objFilter] });
        } }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Header;
