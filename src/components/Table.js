import React, { useContext, useEffect, useState } from 'react';

import '../style/table.css';
import MyContext from '../context/MyContext';

export default function Table() {
  const { data } = useContext(MyContext);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  function handleChangeFilterByName({ target: { value } }) {
    setFilters({ filterByName: { name: value } });
    const filter = data;
    setFilteredData(filter);
    setFilteredData(filter.filter((planet) => planet.name.includes(value)));
  }

  return (
    <main>
      <form>
        <label htmlFor="input-name">
          Name:
          <input
            data-testid="name-filter"
            id="input-name"
            type="text"
            onChange={ handleChangeFilterByName }
          />
        </label>
        <p>{filters.filterByName.name}</p>
      </form>
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
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { filteredData.map((planet) => (
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
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          )) }
        </tbody>

      </table>
    </main>
  );
}
