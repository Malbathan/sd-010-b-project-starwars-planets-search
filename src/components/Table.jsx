import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, setData } = useContext(PlanetContext);

  // {
  //   filters: {
  //     filterByName: {
  //       name: 'Tatoo',
  //     };
  //   };
  // };

  const handleFilterData = ({ target: { value } }) => {
    console.log(value);
    const originData = data;
    const filteredName = data
      .filter((element) => (element.name.includes(value)));
    return filteredName.length < 1 ? setData(originData) : setData(filteredName);
  };

  return (
    <main>
      <h1>Minha Tabela</h1>
      <input
        type="text"
        name="filterByName"
        placeholder="filtrar"
        data-testid="name-filter"
        onChange={ (event) => handleFilterData(event) }
      />
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
        {data.map((planet, index) => (
          <tr key={ index }>
            { planet.name }
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
      </table>
    </main>
  );
}

export default Table;
