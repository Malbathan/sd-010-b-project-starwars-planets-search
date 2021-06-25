import React, { useContext } from 'react';
import TableContext from '../context/tableContext';

function Table() {
  const {
    data, filters: { filterByName: { name } }, setFilter,
  } = useContext(TableContext);
  // console.log(data);

  const dataFiltered = data.filter((planet) => planet.name.includes(name));
  console.log(name);
  if (data.length === 0) {
    return <h1>Loding...</h1>;
  }
  return (
    <main>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ (event) => setFilter({ filterByName: {
          name: event.target.value,
        } }) }
      />
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((planet, index) => <th key={ index }>{planet}</th>)}
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
