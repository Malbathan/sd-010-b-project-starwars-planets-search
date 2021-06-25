import React, { useContext } from 'react';
import context from '../Context/Context';
import Input from './Input';
import Select from './Select';

const Table = () => {
  const { data, input, handleInput, handleSelect } = useContext(context);
  return (
    <div>
      <Input
        type="text"
        placeholder="Buscar"
        handleInput={ handleInput }
        dataTestid="name-filter"
      />
      <Select />
      <input onChange={ handleSelect } id="number" type="number" placeholder="Ex: 1" />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Orbital Period</th>
            <th>Rotation Period</th>
            <th>Surface water</th>
            <th>Terrain</th>
            <th>Gravity</th>
            <th>Films</th>
            <th>Edited</th>
            <th>Diameter</th>
            <th>Created</th>
            <th>Population</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((planet) => planet.name.includes(input))
            .map((value) => (
              <tr key={ value.name }>
                <td>{value.name}</td>
                <td>{value.climate}</td>
                <td>{value.orbital_period}</td>
                <td>{value.rotation_period}</td>
                <td>{value.surface_water}</td>
                <td>{value.terrain}</td>
                <td>{value.gravity}</td>
                <td>{value.films}</td>
                <td>{value.edited}</td>
                <td>{value.diameter}</td>
                <td>{value.created}</td>
                <td>{value.population}</td>
                <td>{value.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
