import React, { useEffect, useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function Table() {
  // states
  const { data,
    fetchAPI,
    dataFilteredByName,
    setDataFilteredByName,
    filterByNumeric,
    setFilterByNumeric,
    dataFilteredBySelects,
    setDataFilteredBySelects } = useContext(PlanetContext);

  // filtering by name
  const [{ filterByName }, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const nameInputState = filterByName.name;

  // functions and Hooks
  useEffect(fetchAPI, []);

  const handleChangeForName = ({ target: { value } }) => {
    setFilters({ filterByName: { name: value } });
  };

  // filtering list with name
  useEffect(() => {
  // filtered By Name
    const countriesFilteredByName = data.filter((e) => e.name.includes(nameInputState));
    setDataFilteredByName(countriesFilteredByName);
  }, [data, nameInputState, setDataFilteredByName]);

  // saving data from selects
  const handleChangeSelects = ({ target: { name, value } }) => {
    setFilterByNumeric({ ...filterByNumeric, [name]: value });
  };

  // filtering list with selects
  const handleClick = () => {
    const { column, condition, numberSelect } = filterByNumeric;
    const number = Number(numberSelect);

    const filteringListByNumber = data.filter((planet) => {
      if (condition === 'maior que') {
        return planet[column] > number;
      }
      if (condition === 'menor que') {
        return planet[column] < number;
      }
      return planet[column] === number;
    });
    setDataFilteredBySelects(filteringListByNumber);
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
        <input type="number" name="numberSelect" data-testid="value-filter" onChange={ handleChangeSelects } />
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
