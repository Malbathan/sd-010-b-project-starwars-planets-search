import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputsSearch() {
  const [column, setColumn] = useState('');
  const [comp, setComp] = useState('');
  const [valueFilter, setValueFilter] = useState('');
  const { setFilters, filters } = useContext(StarWarsContext);

  const searchByText = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };

  const handle = ({ target: { value } }, callBack) => {
    callBack(value);
  };

  const ApplyFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues,
        {
          column,
          comparison: comp,
          value: valueFilter,
        }],
    });
  };

  return (
    <section>
      <input
        value={ filters.filterByName.name }
        onChange={ searchByText }
        data-testid="name-filter"
      />

      <select data-testid="column-filter" onChange={ (e) => handle(e, setColumn) }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select data-testid="comparison-filter" onChange={ (e) => handle(e, setComp) }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => handle(e, setValueFilter) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ ApplyFilter }
      >
        Filtrar
      </button>
    </section>
  );
}

export default InputsSearch;
