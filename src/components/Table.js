import React, { useContext, useEffect, useState } from 'react';

import '../style/table.css';
import MyContext from '../context/MyContext';

export default function Table() {
  const arrayComparison = ['maior que', 'igual a', 'menor que'];

  const { data } = useContext(MyContext);
  const [filteredData, setFilteredData] = useState([]);
  const [arrayColumns, setArrayColumns] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [addNewFilter, setAddNewFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  function handleChangeFilterByName({ target: { value } }) {
    setFilters({ filterByName: { name: value } });
    const filter = data;
    setFilteredData(filter);
    setFilteredData(filter.filter((planet) => planet.name.includes(value)));
  }

  function handleChangeFilter({ target: { name, value } }) {
    setAddNewFilter({ ...addNewFilter,
      [name]: value,
    });
  }

  function addNumericFilters() {
    const currentColumn = addNewFilter.column;
    const currentComparrison = addNewFilter.comparison;
    const currentValue = Number(addNewFilter.value);
    const newArrayColumns = arrayColumns.filter((column) => column !== currentColumn);
    setArrayColumns(newArrayColumns);
    const filter = data;
    setFilteredData(filter);
    setFilteredData(filter.filter((planet) => {
      if (currentComparrison === 'maior que') {
        return Number(planet[currentColumn]) > currentValue;
      } if (currentComparrison === 'menor que') {
        return Number(planet[currentColumn]) < currentValue;
      }
      return Number(planet[currentColumn]) === currentValue;
    }));
  }

  function changeNumericFilters() {
    setFilters({
      filterByNumericValues: [...filters.filterByNumericValues,
        addNewFilter],
    });
    addNumericFilters();
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

        <select
          data-testid="column-filter"
          name="column"
          onChange={ handleChangeFilter }
        >
          {arrayColumns.map((column) => <option option key={ column }>{column}</option>)}

        </select>

        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChangeFilter }
        >
          {arrayComparison
            .map((comparison) => <option key={ comparison }>{ comparison }</option>)}
        </select>

        <label htmlFor="input-number">
          <input
            data-testid="value-filter"
            type="number"
            id="input-number"
            name="value"
            onChange={ handleChangeFilter }
            min="0"
          />
        </label>

        <button
          type="button"
          data-testid="button-filter"
          onClick={ changeNumericFilters }
        >
          Add filter
        </button>
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
