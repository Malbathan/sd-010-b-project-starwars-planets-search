import React, { useContext, useState } from 'react';
import starwarsContext from '../context/starwarsContext';

function Table() {
  const [search, setSearch] = useState('');
  const [filterComparisons, setFilterComparisons] = useState({});
  const [filters, setFilters] = useState({});

  const { data } = useContext(starwarsContext);

  const columns = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created',
    'edited', 'url'];
  const columnFilter = ['orbital_period', 'population', 'diameter',
    'rotation_period', 'surface_water'];
  const handleChange = ({ target: { value } }) => setSearch(value);

  const handleChangeComp = ({ target: { name, value } }) => {
    setFilterComparisons({ ...filterComparisons, [name]: value });
  };

  const handleClick = () => {
    setFilters({ filterByNumericValues: filterComparisons });
  };
  const filtering = (element) => {
    if (!filters.filterByNumericValues) return element;
    const { filterByNumericValues: { filterColumn, filterComparison, valor } } = filters;
    const value = parseFloat(element[filterColumn]);
    switch (filterComparison) {
    case 'maior que':
      return value > Number(valor);
    case 'menor que':
      return value < Number(valor);
    case 'igual a':
      return value === Number(valor);
    default:
      return element;
    }
  };

  if (!data) return <p>Carregando...</p>;
  return (
    <>
      <input data-testid="name-filter" onChange={ handleChange } />
      <br />
      <select
        data-testid="column-filter"
        name="filterColumn"
        onChange={ handleChangeComp }
      >
        {columnFilter.map((column, index) => (
          <option key={ index } value={ column }>{column}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="filterComparison"
        onChange={ handleChangeComp }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input data-testid="value-filter" name="valor" onChange={ handleChangeComp } />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      <table border="1">
        <tr>
          {columns.map((column, index) => <th key={ index }>{column}</th>)}
        </tr>
        { data.filter((planet) => (
          search
            ? planet.name.includes(search)
            : filtering(planet)))
          .map((planets, index) => (
            <tr key={ index }>
              {Object.values(planets)
                .map((values, indexs) => <td key={ indexs }>{values}</td>)}
            </tr>))}
      </table>
    </>
  );
}

export default Table;
