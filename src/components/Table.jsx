import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function PlanetList() {
  const { values: {
    data,
    data2,
    filterName,
    Select, filterSelect, selectFilter, typeFilter, selectedFilter, resetFilter,
  } } = useContext(PlanetContext);

  function list() {
    if (data2.length > 0) {
      return (
        data2.map((planet, index) => (
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
          </tr>))
      );
    } return (
      data.map((planet, index) => (
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
        </tr>))
    );
  }

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => filterName(event.target.value) }
      />
      <select
        data-testid="column-filter"
        name="status"
        onChange={ ({ target }) => Select(target) }
      >
        {typeFilter.map((filtro) => (
          <option
            key={ filtro }
            value={ filtro }
          >
            {filtro}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="operator"
        onChange={ ({ target }) => Select(target) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ ({ target }) => Select(target) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => filterSelect(selectFilter) }
      >
        Buscar
      </button>
      <div data-testid="filter">
        {selectedFilter.map((filt) => (
          <button
            onClick={ ({ target }) => resetFilter(target) }
            key={ filt }
            type="button"
            value={ filt }
          >
            X
            {' '}
            {filt}
          </button>))}
      </div>
      <table border="1px">
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
        {list()}
      </table>
    </div>
  );
}

export default PlanetList;
