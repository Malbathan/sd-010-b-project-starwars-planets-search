import React, { useState, useEffect } from 'react';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requisicao = async () => {
      const objeto = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await objeto.json();
      setData(results);
    };
    requisicao();
  }, []);

  function renderTable() {
    return data.map((
      { name, climate, created, diameter, edited, films, orbital_period: orbitalPeriod,
        population, rotation_period: rotationPeriod, surface_water: surfaceWater, url,
        gravity, terrain }, index,
    ) => (
      <tbody key={ index }>
        <tr>
          <td>{ name }</td>
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
      </tbody>
    ));
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Climate</td>
          <td>Created</td>
          <td>Diameter</td>
          <td>Edited</td>
          <td>Films</td>
          <td>Gravity</td>
          <td>Orbital Period</td>
          <td>Population</td>
          <td>Rotation Period</td>
          <td>Surface Water</td>
          <td>Terrain</td>
          <td>Url</td>
        </tr>
      </thead>
      { renderTable() }
    </table>
  );
}

export default Table;
