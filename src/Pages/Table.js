import React, { useContext } from 'react';

import contextSauder from '../context/context';

// import options from '../services/helpers';

function Table() {
  const { options, responseAPI, handleChangePlanet,
    changefilteredByNumber, colum,
    handleButtonFilterClick, del: { alvo },
    filters:
    { filterByName: { name } } } = useContext(contextSauder);
  console.log(alvo);

  return (
    <div className="table">
      <section className="filter">
        <label htmlFor="planet">
          Pesquise por planeta
          <input id="planet" data-testid="name-filter" onChange={ handleChangePlanet } />
        </label>
        <label htmlFor="colum">
          <select
            name="column"
            id="colum"
            data-testid="column-filter"
            onChange={ colum }
            // value={ alvo }
          >
            {options.map((cur, index) => (
              <option key={ index } value={ cur }>{cur}</option>
            ))}

          </select>
        </label>
        <label htmlFor="comp">
          <select
            name="comparison"
            id="comp"
            data-testid="comparison-filter"
            onChange={ changefilteredByNumber }
            // value={ filterByNumericValues[0].comparison }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="num">
          Digite um número
          <input
            id="num"
            type="number"
            name="number"
            data-testid="value-filter"
            onChange={ changefilteredByNumber }
            // value={ filterByNumericValues[0].number }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleButtonFilterClick }
        >
          Filtrar
        </button>
      </section>
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
          {responseAPI.filter((filter) => filter.name.includes(name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
