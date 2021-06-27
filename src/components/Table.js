import React, { useContext } from 'react';
import TableContext from '../context/TableContext';
import FiltersInsert from './FiltersInsert';
import TableContent from './TableContent';
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

  const filterValue = filterInsert.value;
  const filterColumn = filterInsert.column;
  const filterComparison = filterInsert.comparison;

  const tableHead = () => {
    if (planets) {
      const keys = Object.keys(planets[0]);
      const arrayObject = keys.filter((key) => key !== 'residents');
      return arrayObject.map((plan) => (
        <th key={ plan }>{plan}</th>
      ));
    }
  };

  function filterPlanetsBigger() {
    return (
      planets
        && planets
          .filter((planet) => (nameToFilter
            ? planet.name.includes(nameToFilter) : planet))
          .filter((planet) => parseInt(planet[filterColumn], 10) > filterValue)
    );
  }

  function filterPlanetsEqualTo() {
    return (
      planets
    && planets
      .filter((planet) => (nameToFilter
        ? planet.name.includes(nameToFilter) : planet))
      .filter((planet) => planet[filterColumn] === filterValue.toString())
    );
  }

  // filterPlanets();

  const tableBody = () => {
    if ((filterByValue === 1) && (filterComparison === 'maior que')) {
      return (
        filterPlanetsBigger()
          .map((planet, index) => (
            TableContent(planet, index)
          ))
      );
    }
    if ((filterByValue === 1) && (filterComparison === 'menor que')) {
      return (planets
        && planets
          .filter((planet) => (nameToFilter
            ? planet.name.includes(nameToFilter) : planet))
          .filter((planet) => parseInt(planet[filterColumn], 10) < filterValue)
          .map((planet, index) => (
            TableContent(planet, index)
          ))
      );
    }
    if ((filterByValue === 1) && (filterComparison === 'igual a')) {
      return (
        filterPlanetsEqualTo()
          .map((planet, index) => (
            TableContent(planet, index)
          ))
      );
    }
    return (
      planets
      && planets
        .filter((planet) => (nameToFilter
          ? planet.name.includes(nameToFilter) : planet))
        .map((planet, index) => (
          TableContent(planet, index)
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
