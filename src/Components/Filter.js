import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

export default function Filter() {
  const { filters, setFilters } = useContext(SWContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [values, setValues] = useState(0);

  // Name:
  const filterName = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  // Numeric Values:
  const filterNumeric = (e) => {
    e.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [{
        column,
        comparison,
        values,
      }],
    });
  };

  // Comparison:
  const handleComparison = (e) => {
    const { value } = e.target;
    setComparison(value);
  };

  // Column:
  const handleColumn = (e) => {
    const { value } = e.target;
    setColumn(value);
  };

  // Value:
  const handleValues = (e) => {
    const { value } = e.target;
    setValues(value);
  };

  // const aplicaFiltro = filters.filterByNumericValues.map((elem) => elem.column);

  const filterOption = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  // aplicaFiltro.forEach((filtro) => {
  //   filterOption = filterOption.filter((option) => option !== filtro);
  // });

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
          onChange={ handleColumn }
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
          onChange={ handleComparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          onChange={ handleValues }
        />
        <button
          type="submit"
          onClick={ filterNumeric }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}
