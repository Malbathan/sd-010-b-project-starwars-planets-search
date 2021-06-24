import React from 'react';
import fetchMovieTitle from './services/fetchMovieTitle';
import TableContext from './TableContext';

function Table() {
  return (
    <TableContext.Consumer>
      {
        (data) => {
          const { data: { results }, filters, setFilters } = data;
          const { filterByName } = filters;
          return (
            <div>
              <p>Filtrar</p>
              <input
                type="text"
                name="filterbyName"
                id=""
                data-testid="name-filter"
                onChange={ ({ target }) => setFilters({
                  ...filters, filterByName: { name: target.value } }) }
              />
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
                  {results.filter((planet) => planet.name.includes(filterByName.name))
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
