import React, { useEffect, useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function Table() {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  // states
  const { data, fetchAPI } = useContext(PlanetContext);
  const [{ filterByName }, setFilters] = useState(INITIAL_STATE);
  const nameInputState = filterByName.name;
  const [dataFilteredByName, setDataFilteredByName] = useState([]);
  const [filterByNumeric, setFilterByNumeric] = useState([]);

  // functions and Hooks
  useEffect(fetchAPI, []);

  const handleChangeForName = ({ target: { value } }) => {
    setFilters({ filterByName: { name: value } });
  };

  useEffect(() => {
    // filteredByName
    const countriesFilteredByName = data.filter((e) => e.name.includes(nameInputState));
    setDataFilteredByName(countriesFilteredByName);
  }, [data, nameInputState]);

  const handleChangeSelects = ({ target: { value } }) => {
    console.log(value);

    // setFilterByNumeric( filterByNumericValues{
    //   column: ,
    //   condition: ,
    //   number: ,
    // })
  };

  const handleClick = ({ target }) => {

  };

  const conditionalRendering = () => {
    // conditional depending on the filters
    if (dataFilteredByName) {
      return (
        dataFilteredByName.map(({
          name: namePlanet,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        }, index) => (
          <tr key={ index }>
            <td>{ namePlanet }</td>
            <td>{ rotationPeriod }</td>
            <td>{ orbitalPeriod }</td>
            <td>{ diameter }</td>
            <td>{ climate }</td>
            <td>{ gravity }</td>
            <td>{ terrain }</td>
            <td>{ surfaceWater }</td>
            <td>{ population }</td>
            <td>{ films }</td>
            <td>{ created }</td>
            <td>{ edited }</td>
            <td>{ url }</td>
          </tr>))
      );
    }
    data.map(({
      name: namePlanet,
      rotation_period: rotationPeriod,
      orbital_period: orbitalPeriod,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water: surfaceWater,
      population,
      films,
      created,
      edited,
      url,
    }) => (
      <tr key={ namePlanet }>
        <td>{ namePlanet }</td>
        <td>{ rotationPeriod }</td>
        <td>{ orbitalPeriod }</td>
        <td>{ diameter }</td>
        <td>{ climate }</td>
        <td>{ gravity }</td>
        <td>{ terrain }</td>
        <td>{ surfaceWater }</td>
        <td>{ population }</td>
        <td>{ films }</td>
        <td>{ created }</td>
        <td>{ edited }</td>
        <td>{ url }</td>
      </tr>));
  };

  // render
  return (
    <div>
      <form>
        <h2>Filtros</h2>
        <label htmlFor="name-filtre">
          <input
            type="text"
            id="name-filtre"
            onChange={ handleChangeForName }
            data-testid="name-filter"
            placeholder="Filtering by name"
          />
        </label>
        <select name="column" id="column" onChange={ handleChangeSelects } data-testid="column-filter">
          <option defaultValue="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="condition"
          id="condition"
          data-testid="comparison-filter"
          onChange={ handleChangeSelects }
        >
          <option defaultValue="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" data-testid="value-filter" onChange={ handleChangeSelects } />
        <button type="button" onClick={ handleClick } data-testid="button-filter">
          Filtrar
        </button>

      </form>
      <table>
        <thead>
          <tr>
            <th>name Planet</th>
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
          {conditionalRendering()}
        </tbody>
      </table>
    </div>
  );
}
