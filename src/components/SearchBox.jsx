import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBox() {
  const { filter, setFilter, planets, setFilteredPlanets } = useContext(PlanetContext);

  function generateSelectColumnOptions() {
    const tableTitles = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

    return tableTitles.map((title) => <option key={ title } value={ title }>{ title }</option>)
  }

  function catchFilter({ id, value }) {
    const { filterByNumericValues } = filter;
    const { column: oldColumn, comparison: oldComparasion, value: oldValue } = filterByNumericValues[0];

    switch (id) {
      case 'name-filter':
        setFilter({ ...filter, filterByName: { name: value } });
        break;
      case 'column-filter':
        setFilter({ ...filter, filterByNumericValues: [{ column: value, comparison: oldComparasion, value: oldValue }] });
        break;
      case 'comparison-filter':
        setFilter({ ...filter, filterByNumericValues: [{ column: oldColumn, comparison: value, value: oldValue }] });
        break;
      case 'value-filter':
        setFilter({ ...filter, filterByNumericValues: [{ column: oldColumn, comparison: oldComparasion, value: value }] });
        break;
      default:
        break;
    }
  }

  function handleClickFilter() {
    const { filterByNumericValues } = filter;
    const { column, comparison, value } = filterByNumericValues[0];
    let filteredPlanets = [];

    switch (comparison) {
      case 'maior que':
        filteredPlanets = planets.filter(
          ({ [column]: columnFilter }) => parseInt(columnFilter) > parseInt(value));
        break;
      case 'menor que':
        filteredPlanets = planets.filter(
          ({ [column]: columnFilter }) => parseInt(columnFilter) < parseInt(value));
        break;
      case 'igual a':
        filteredPlanets = planets.filter(
          ({ [column]: columnFilter }) => parseInt(columnFilter) === parseInt(value));
        break;
      default:
        break;
    }

    setFilteredPlanets(filteredPlanets);
  }

  return (
    <section>
      <input id='name-filter' type="text" data-testid='name-filter' onChange={ ({ target }) => catchFilter(target) } />
      <br/>
      <select id='column-filter' data-testid='column-filter' onChange={ ({ target }) => catchFilter(target) }>{ generateSelectColumnOptions() }</select>
      <select id='comparison-filter' data-testid='comparison-filter' onChange={ ({ target }) => catchFilter(target) }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input id="value-filter" type="text" data-testid='value-filter' onChange={ ({ target }) => catchFilter(target)} />
      <button data-testid='button-filter' onClick={ () => handleClickFilter() }>Filtrar</button>
    </section>
  );
}

export default SearchBox;