import React, { useContext, useState, useEffect } from 'react';
import MyContext from './MyContext';

function Header() {
  const { filters, setfilters } = useContext(MyContext);
  const [selectColumn, setSelectColumn] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [objFilter, setObjFilter] = useState({
    column: selectColumn[0],
    comparison: 'maior que',
    value: 0,
  });

  useEffect(() => {
    function updateColumn() {
      const newColumn = selectColumn.filter((element) => element !== objFilter.column);
      setSelectColumn(newColumn);
    }

    if (filters.filterByNumericValues.length > 0) {
      updateColumn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

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
          value={ objFilter.column }
          onChange={ (e) => {
            setObjFilter({ ...objFilter, column: e.target.value });
          } }
        >
          {selectColumn.map((column) => (
            <option value={ column } key={ column }>
              {column}
            </option>
          ))}
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
          setfilters({
            ...filters,
            filterByNumericValues: [...filters.filterByNumericValues, objFilter],
          });
          setObjFilter({ ...objFilter, column: selectColumn[0] });
        } }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Header;
