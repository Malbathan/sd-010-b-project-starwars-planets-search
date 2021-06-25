import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function ContentsTable() {
  const { data, filters } = useContext(StarWarsContext);

  const { filterByNumericValues } = filters;

  const { column } = filterByNumericValues[0];
  const { comparison } = filterByNumericValues[0];
  const { value } = filterByNumericValues[0];

  console.log(column);
  console.log(comparison);
  console.log(value);

  const { filterByName: { name } } = filters;

  const filterNamePlanets = (name !== '')
    ? data.filter((itemValue) => itemValue.name.toLocaleLowerCase()
      .includes(name.toLocaleLowerCase()))
    : data;

  console.log(filterNamePlanets);

  const filterData = (value !== 0 && column !== '' && comparison !== '')
    ? filterNamePlanets.filter((item) => {
      if (comparison === 'maior que') {
        return parseFloat(item[column]) > parseFloat(value);
      }
      if (comparison === 'igual a') {
        return parseFloat(item[column]) === parseFloat(value);
      }
      return parseFloat(item[column]) < parseFloat(value);
    })
    : filterNamePlanets;

  return (
    filterData.map((valueDados, index) => (
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
