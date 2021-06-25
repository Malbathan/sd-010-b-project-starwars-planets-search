import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputsSearch() {
  const [opColumn, setOpColumn] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [column, setColumn] = useState('population');
  const [comp, setComp] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('');
  const { setFilters, filters } = useContext(StarWarsContext);

  const searchByText = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };

  const handle = ({ target: { value } }, callBack) => {
    callBack(value);
  };

  const ApplyFilter = () => {
    setOpColumn(opColumn.filter((op) => op !== column));
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
        { opColumn.map((op) => (<option value={ op } key={ op }>{op}</option>)) }
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
