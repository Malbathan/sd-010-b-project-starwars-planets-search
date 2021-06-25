import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, planets, setPlanets } = useContext(PlanetContext);

  const clearFilter = () => {
    setPlanets(data);
  };

  // {
  //   filters: {
  //     filterByName: {
  //       name: 'Tatoo',
  //     };
  //   };
  // };

  const handleFilterNome = ({ target: { value } }) => {
    const filteredName = data
      .filter((element) => (element.name.includes(value)));
    setPlanets(filteredName);
  };

  // const handleFilterNumber = ({ target: { value } }) => {
  //   const filteredRotationPeriod = planets
  //     .filter((element) => (element.rotation_period.includes(value)));
  //   setPlanets(filteredRotationPeriod);
  //   const filteredOrbitalPeriod = planets
  //     .filter((element) => (element.orbital_period.includes(value)));
  //   setPlanets(filteredOrbitalPeriod);
  // };

  return (
    <main>
      <h1>Minha Tabela</h1>
      <input
        type="text"
        name="filterByName"
        placeholder="filtrar"
        data-testid="name-filter"
        onChange={ (event) => (handleFilterNome(event)) }
        // onChange={ (event) => console.log(typeof event.target.value) }
      />
      {/* <input
        type="number"
        name="filterByNumber"
        placeholder="filtrar"
        data-testid="number-filter"
        // onChange={ (event) => (typeOf(event.target.value) === 'number'
        //   ? handleFilterNumber(event)
        //   : handleFilterNome(event)) }
        onChange={ (event) => console.log(typeof event.target.value) }
        onKeyDown={ () => clearFilter() }
      /> */}
      {/* <select name="" id="">
        <option selected>Selecione</option>
        {planets.map((planet, index) => (
          <option
            key={ index }
            onKeyDown={ () => handleFilterNome() }
          >
            { planet.name }
          </option>
        ))}
      </select> */}
      <input type="button" value="X" onClick={ clearFilter } />
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
          {planets.map((planet, index) => (
            <tr key={ index }>
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
    </main>
  );
}

export default Table;
