import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function ContentsTable() {
  const { data, filters } = useContext(StarWarsContext);

  const { filterByName: { name } } = filters;

  console.log(name);

  // const filterNamePlanets = data.filter(({ name }) => name.toLocaleLowerCase()
  //   .includes(name.toLocaleLowerCase()));

  const filterNamePlanets = (name !== '')
    ? data.filter((value) => value.name.toLocaleLowerCase()
      .includes(name))
    : data;

  return (
    filterNamePlanets.map((valueDados, index) => (
      <tr key={ index }>
        <td>{valueDados.name}</td>
        <td>{valueDados.rotation_period}</td>
        <td>{valueDados.orbital_period}</td>
        <td>{valueDados.diameter}</td>
        <td>{valueDados.climate}</td>
        <td>{valueDados.gravity}</td>
        <td>{valueDados.terrain}</td>
        <td>{valueDados.surface_water}</td>
        <td>{valueDados.population}</td>
        <td>{valueDados.films}</td>
        <td>{valueDados.created}</td>
        <td>{valueDados.edited}</td>
        <td>{valueDados.url}</td>
      </tr>
    ))
  );
}

export default ContentsTable;
