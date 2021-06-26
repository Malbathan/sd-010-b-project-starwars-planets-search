import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, search, handleChange,
    handleChangeFilter, onClick } = useContext(PlanetContext);

  return (
    <main>
      <h1>Minha Tabela</h1>
      <label htmlFor="name-filter">
        Busca por texto
        <input
          type="text"
          name="filterByName"
          placeholder="filtrar por texto"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
      <select
        name="column"
        id="column-filter"
        defaultValue="DEFAULT"
        data-testid="column-filter"
        onChange={ handleChangeFilter }
      >
        <option value="DEFAULT" disabled>Selecione tipo do filtro</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        defaultValue="DEFAULT"
        data-testid="comparison-filter"
        onChange={ handleChangeFilter }
      >
        <option value="DEFAULT" disabled>Selecione a comparação do filtro</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        placeholder="filtrar por número"
        data-testid="value-filter"
        onChange={ handleChangeFilter }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClick }
      >
        Filtrar
      </button>
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
          {data.filter((item) => item.name.includes(search)).map((planet) => (
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
    </main>
  );
}

export default Table;
