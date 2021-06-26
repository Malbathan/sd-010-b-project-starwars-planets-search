import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWars';

function Table() {
  const { data, handleChange,
    searchName, handleClick,
    handleChangeFilter, handlgeClickClear } = useContext(StarWarsContext);
  return (
    <>
      <div className="d-flex justify-content-around flex-wrap">
        <div className="border border-primary">
          <label htmlFor="searchName">
            <input
              data-testid="name-filter"
              id="searchName"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div className="border border-primary">
          <select
            name="column"
            data-testid="column-filter"
            onChange={ handleChangeFilter }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ handleChangeFilter }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            type="number"
            name="value"
            data-testid="value-filter"
            onChange={ handleChangeFilter }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleClick }
          >
            Button
          </button>
        </div>
        <div className="border border-primary">
          <div>
            <p>Filtros</p>
            <button
              type="button"
              data-testid="filter"
              onClick={ handlgeClickClear }
            >
              X
            </button>
          </div>
        </div>
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Surface Water</th>
            <th>Gravity</th>
            <th>Created</th>
            <th>Crimate</th>
            <th>Terrain</th>
            <th>Diameter</th>
            <th>Films</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((object) => object.name.includes(searchName))
            .map((item) => (
              <tr key={ item.name }>
                <td>{item.name}</td>
                <td>{item.population}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.surface_water}</td>
                <td>{item.gravity}</td>
                <td>{item.created}</td>
                <td>{item.climate}</td>
                <td>{item.terrain}</td>
                <td>{item.diameter}</td>
                <td>{item.films}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
