import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    keys,
    handleDataByName,
    optionMaker,
    truePlanets,
    handleState,
    filterSwitch } = useContext(PlanetsContext);

  return (
    <>
      <header>
        <label htmlFor="nameFilter">
          <input
            type="text"
            name="nameFilter"
            data-testid="name-filter"
            onChange={ ({ target }) => handleDataByName(target) }
          />
        </label>

        <label htmlFor="column">
          <select
            name="column"
            data-testid="column-filter"
            onChange={ ({ target }) => handleState(target) }
          >
            {optionMaker('column')}
          </select>
        </label>

        <label htmlFor="comparison">
          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ ({ target }) => handleState(target) }
          >
            {optionMaker('comparison')}
          </select>
        </label>

        <label htmlFor="number">
          <input
            type="number"
            name="number"
            data-testid="value-filter"
            onChange={ ({ target }) => handleState(target) }
          />
        </label>

        <button type="button" data-testid="button-filter" onClick={ filterSwitch }>
          Acionar filtro
        </button>
      </header>

      <table>
        <tbody>
          <tr>
            {keys.map((key) => <th key={ key }>{key}</th>)}
          </tr>
          {truePlanets.map((planet) => (
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
            </tr>))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
