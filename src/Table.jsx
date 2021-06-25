import React, { useState } from 'react';
import fetchMovieTitle from './services/fetchMovieTitle';
import TableContext from './TableContext';

function Table() {
  const [columnFilter, setColumnFilter] = useState('diameter');
  const [comparisonFilter, setComparisonFilter] = useState('bigger_than');
  const [valueFilter, setValueFilter] = useState(0);
  return (
    <TableContext.Consumer>
      {
        (data) => {
          const { data: { results }, filters, setFilters } = data;
          const { filterByName, filterByNumericValues } = filters;
          function handleNumericFilterChange({ target }) {
            const { name, value } = target;
            setFilters({
              ...filters,
              filterByNumericValues: [
                {
                  ...filterByNumericValues[0],
                  [name]: value,

                },
              ],
            });
          }
          function setFiltersInState() {
            const { column, comparison, value } = filterByNumericValues[0];
            setColumnFilter(column);
            setComparisonFilter(comparison);
            setValueFilter(parseInt(value, 10));
          }
          function filterByNumbers(planet) {
            if (comparisonFilter === 'bigger_than') {
              return planet[columnFilter] > valueFilter;
            }
            if (comparisonFilter === 'less_than') {
              return planet[columnFilter] < valueFilter;
            }
            if (comparisonFilter === 'equal_to') {
              return planet[columnFilter] === valueFilter;
            }
            return false;
          }
          return (
            <div>
              <h3>Filter</h3>
              <p>By name:</p>
              <input
                type="text"
                name="filterbyName"
                id=""
                data-testid="name-filter"
                onChange={ ({ target }) => setFilters({
                  ...filters, filterByName: { name: target.value } }) }
              />
              <p>By numbers:</p>
              <select
                name="column"
                id="column"
                data-testid="column-filter"
                onChange={ handleNumericFilterChange }
              >
                <option value="population">population</option>
                <option value="orbital_period">orbital_period</option>
                <option value="diameter">diameter</option>
                <option value="rotation_period">rotation_period</option>
                <option value="surface_water">surface_water</option>
              </select>
              <select
                name="comparison"
                id="comparison"
                data-testid="comparison-filter"
                onChange={ handleNumericFilterChange }
              >
                <option value="bigger_than">maior que</option>
                <option value="less_than">menor que</option>
                <option value="equal_to">igual a</option>
              </select>
              <input
                type="number"
                name="value"
                id="value"
                data-testid="value-filter"
                onChange={ handleNumericFilterChange }
              />
              <button
                type="button"
                data-testid="button-filter"
                onClick={ setFiltersInState }
              >
                Filter
              </button>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Rotation Period</th>
                    <th>Orbital Period</th>
                    <th>Diameter</th>
                    <th>Climate</th>
                    <th>Gravity</th>
                    <th>Terrain</th>
                    <th>Surface Water</th>
                    <th>Population</th>
                    <th>Films</th>
                    <th>Created</th>
                    <th>Edited</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  {results
                    .filter((planet) => filterByNumbers(planet))
                    .filter((planet) => planet.name.includes(filterByName.name))
                    .map((planet) => (
                      <tr key={ planet.name }>
                        <td>{planet.name}</td>
                        <td>{planet.rotation_period}</td>
                        <td>{planet.orbital_period}</td>
                        <td>{planet.diameter}</td>
                        <td>{planet.climate}</td>
                        <td>{planet.gravity}</td>
                        <td>{planet.terrain}</td>
                        <td>{planet.surface_water}</td>
                        <td>{planet.population}</td>
                        <td>
                          {planet.films.map(async (film) => {
                            const filmName = await fetchMovieTitle(film);
                            return filmName;
                          }).toString()}
                        </td>
                        <td>{planet.created}</td>
                        <td>{planet.edited}</td>
                        <td>{planet.url}</td>
                      </tr>))}
                </tbody>
              </table>
            </div>
          );
        }
      }
    </TableContext.Consumer>
  );
}

export default Table;
