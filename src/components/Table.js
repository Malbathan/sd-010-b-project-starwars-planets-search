import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../contexts';

function Table() {
  const [data, setData] = useState([]);
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const { name, fullFilter } = useContext(Context);

  useEffect(() => {
    const requisicao = async () => {
      const objeto = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await objeto.json();
      setData(results);
      setPlanetsFilter(results);
    };
    requisicao();
  }, []);

  function filterData(objectRequest) {
    const { filterByNumericValues } = fullFilter;
    const { column, comparison, value } = filterByNumericValues[0];
    if (comparison === '>') {
      return objectRequest.filter((element) => parseFloat(element[column]) > value);
    }
    if (comparison === '<') {
      return objectRequest.filter((element) => parseFloat(element[column]) < value);
    }
    return objectRequest.filter((element) => parseFloat(element[column]) === value);
  }

  useEffect(() => {
    const planets = data.filter(({ name: planet }) => (
      name ? planet.includes(name) : true));
    setPlanetsFilter(planets);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    const planets = filterData(data);
    setPlanetsFilter(planets);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullFilter]);

  function renderTable() {
    return planetsFilter.map((
      { name: planet, climate, created, edited, films, orbital_period: orbitalPeriod,
        population, rotation_period: rotationPeriod, surface_water: surfaceWater, url,
        gravity, terrain, diameter }, index,
    ) => (
      <tr key={ index }>
        <td>{ planet }</td>
        <td>{ climate }</td>
        <td>{ created }</td>
        <td>{ diameter }</td>
        <td>{ edited }</td>
        <td>{ films }</td>
        <td>{ gravity }</td>
        <td>{ orbitalPeriod }</td>
        <td>{ population }</td>
        <td>{ rotationPeriod }</td>
        <td>{ surfaceWater }</td>
        <td>{ terrain }</td>
        <td>{ url }</td>
      </tr>
    ));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Orbital Period</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        { renderTable() }
      </tbody>
    </table>
  );
}

export default Table;
