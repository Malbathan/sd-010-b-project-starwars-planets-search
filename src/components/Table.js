import React, { useContext } from 'react';
import TableContext from '../context/TableContext';
import FiltersInsert from './FiltersInsert';
//  Fonte ultilização de da tag <table>: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/table
// Fonte parteInt(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function Table() {
  const { planets,
    filters: {
      filterByName: { name: nameToFilter },
    },
    filterInsert,
    filterByValue,
    // setFilterByValue,
  } = useContext(TableContext);

  const tableHead = () => {
    if (planets) {
      const keys = Object.keys(planets[0]);
      const arrayObject = keys.filter((key) => key !== 'residents');
      return arrayObject.map((plan) => (
        <th key={ plan }>{plan}</th>
      ));
    }
  };

  // function filterPlanets() {
  //   if (planets) {
  //     const filterValue = filterInsert.value;
  //     console.log(filterValue);
  //     const filterColumn = filterInsert.column;
  //     const planetsFiltered = planets
  //       .filter((planet) => planet[filterColumn] === filterValue.toString());
  //     console.log(planetsFiltered);
  //     return planetsFiltered;
  //   }
  // }

  const filterValue = filterInsert.value;
  const filterColumn = filterInsert.column;
  const filterComparison = filterInsert.comparison;

  // filterPlanets();

  const tableBody = () => {
    if ((filterByValue === 1) && (filterComparison === 'maior que')) {
      return (
        planets
        && planets
          .filter((planet) => (nameToFilter
            ? planet.name.includes(nameToFilter) : planet))
          .filter((planet) => parseInt(planet[filterColumn], 10) > filterValue)
          .map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
      );
    }
    if ((filterByValue === 1) && (filterComparison === 'menor que')) {
      return (
        planets
        && planets
          .filter((planet) => (nameToFilter
            ? planet.name.includes(nameToFilter) : planet))
          .filter((planet) => parseInt(planet[filterColumn], 10) < filterValue)
          .map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
      );
    }
    if ((filterByValue === 1) && (filterComparison === 'igual a')) {
      return (
        planets
        && planets
          .filter((planet) => (nameToFilter
            ? planet.name.includes(nameToFilter) : planet))
          .filter((planet) => planet[filterColumn] === filterValue.toString())
          .map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
      );
    }
    return (
      planets
      && planets
        .filter((planet) => (nameToFilter
          ? planet.name.includes(nameToFilter) : planet))
        .map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))
    );
  };

  return (
    <>
      <FiltersInsert />
      <table>
        <thead>
          <tr>
            {tableHead()}
          </tr>
        </thead>
        <tbody>
          {tableBody()}
        </tbody>
      </table>
    </>
  );
}

export default Table;
