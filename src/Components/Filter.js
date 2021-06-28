import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

export default function Filter() {
  const { filters, setFilters } = useContext(SWContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [values, setValues] = useState(0);

  // Name:
  const filterName = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  // Numeric Values:
  const filterNumeric = (e) => {
    e.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [
        { column, comparison, value: values }] });
  };

  // const aplicaFiltro = filters.filterByNumericValues.map((elem) => elem.column);

  const filterOption = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  // aplicaFiltro.forEach((filtro) => {
  //   filterOption = filterOption.filter((option) => option !== filtro);
  // });

  const removeFilters = (e) => {
    e.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [{
        column: '',
        comparison: '',
        values: 0,
      }],
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={ filterName }
        placeholder="Search by name"
        data-testid="name-filter"
      />
      <form onSubmit={ filterNumeric }>
        <h4>Search by numeric value: </h4>
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          { filterOption.map((el, i) => (
            <option value={ el } key={ i }>
              { el }
            </option>
          )) }
        </select>
        <select
          name="setComparision"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          onChange={ (e) => setValues(e.target.value) }
        />
        <button
          type="submit"
          onClick={ filterNumeric }
          data-testid="button-filter"
        >
          Filtrar
        </button>
        <button type="button" onClick={ removeFilters }>
          X
        </button>
      </form>
    </div>
  );
}
