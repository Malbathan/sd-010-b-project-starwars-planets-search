import React, { useContext } from 'react';
import Context from '../context/context';

function Table() {
  const { data, filters, setFilters } = useContext(Context);
  console.log(data.length);
  let newData = data;
  for (let i = 0; i < data.length; i += 1) {
    if (filters.filters.filterByName.name) {
      const getNewData = data
        .filter((planets) => planets.name.includes(filters.filters.filterByName.name));
      newData = getNewData;
    }
  }

  const renderTable = () => (
    <table border="1" width="500px">
      <tr>
        <th>name</th>
        <th>rotation_period</th>
        <th>orbital_period</th>
        <th>diameter</th>
        <th>climate</th>
        <th>gravity</th>
        <th>terrain</th>
        <th>surface_water</th>
        <th>population</th>
        <th>films</th>
        <th>created</th>
        <th>edited</th>
        <th>url</th>
      </tr>
      {newData.map((planet, i) => (
        <tr key={ i }>
          <td>{ planet.name }</td>
          <td>{ planet.rotation_period }</td>
          <td>{ planet.orbital_period }</td>
          <td>{ planet.diameter }</td>
          <td>{ planet.climate }</td>
          <td>{ planet.gravity }</td>
          <td>{ planet.terrain }</td>
          <td>{ planet.surface_water }</td>
          <td>{ planet.population }</td>
          <td>{ planet.films.map((film, id) => <ul key={ id }><li>{film}</li></ul>) }</td>
          <td>{ planet.created }</td>
          <td>{ planet.edited }</td>
          <td>{ planet.url }</td>
        </tr>))}
    </table>
  );
  return (
    <div>
      <form>
        <label htmlFor="filter-name">
          Filtrar por nome
          <input
            type="text"
            id="filter-name"
            name="filter-name"
            data-testid="name-filter"
            onChange={ (e) => setFilters({
              filters: {
                filterByName: {
                  name: e.target.value,
                },
              },
            }) }
          />
        </label>
      </form>
      { data && renderTable() }
    </div>
  );
}

export default Table;
