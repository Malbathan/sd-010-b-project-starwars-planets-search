import React, { useEffect, useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function Table() {
  const INITIAL_STATE = {
    filters: {
      filterByName: {
        name: '',
      },
    },
  };

  // states
  const { data, fetchAPI } = useContext(PlanetContext);

  const [{ filters }, setFilters] = useState(INITIAL_STATE);
  const nameInputState = filters.filterByName.name;

  const [dataFilteredByName, setDataFilteredByName] = useState([]);

  // functions and Hooks
  useEffect(fetchAPI, []);

  const handleChange = ({ target: { value } }) => {
    setFilters({ filters: { filterByName: { name: value } } });
  };

  useEffect(() => {
    // filteredByName
    const countriesFilteredByName = data.filter((e) => e.name.includes(nameInputState));
    setDataFilteredByName(countriesFilteredByName);
  }, [data, nameInputState]);

  const conditionalRendering = () => {
    // conditional depending on the filters
    console.log(data);
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
          residents,
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
            <td>{ residents }</td>
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
      residents,
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
        <td>{ residents }</td>
        <td>{ films }</td>
        <td>{ created }</td>
        <td>{ edited }</td>
        <td>{ url }</td>
      </tr>));
  };

  // render
  return (
    <div>
      <label htmlFor="name-filtre">
        filtre por nome
        <input
          type="text"
          id="name-filtre"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
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
            <th>Residents</th>
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
