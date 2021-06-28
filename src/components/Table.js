import React, { useContext } from 'react';
import myContext from '../context/myContext';
import SearchBar from './SearchBar';
import ActiveFilters from './ActiveFilters';

function Table() {
  const {
    isLoading,
    data,
    tableHeaders,
    filterByName: { name },
    filterByNumericValues,
  } = useContext(myContext);

  console.log(tableHeaders);

  function tableHeader() {
    return (
      <tr>
        { tableHeaders.map((header) => (
          <th key={ header }>{header}</th>
        ))}
      </tr>
    );
  }

  function planetsTable() {
    let planets = data
      .filter((planet) => planet.name.toUpperCase().includes(name.toUpperCase()));

    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((({ comparison, column, value }) => {
        if (comparison === 'maior que') {
          planets = planets.filter((planet) => +(planet[column]) > +(value));
        }

        if (comparison === 'menor que') {
          planets = planets.filter((planet) => +(planet[column]) < +(value));
        }

        if (comparison === 'igual a') {
          planets = planets.filter((planet) => +(planet[column]) === +(value));
        }
      }));
    }

    return planets.map((planet) => (
      <tr key={ planet.name }>
        <td>{planet.name}</td>
        <td>{planet.terrain}</td>
        <td>{planet.population}</td>
        <td>{planet.climate}</td>
        <td>{planet.diameter}</td>
        <td>{planet.gravity}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.films}</td>
        <td>{planet.url}</td>
      </tr>
    ));
  }

  return isLoading ? <span>Carregando...</span> : (
    <div>
      <SearchBar />
      <ActiveFilters />
      <table>
        <thead>
          { tableHeader() }
        </thead>

        <tbody>
          { planetsTable() }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
