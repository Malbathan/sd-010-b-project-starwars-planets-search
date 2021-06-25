import React, { useContext, useState, useEffect } from 'react';
import TableContext from '../context/tablecontext';
// option colums ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']
// option ['maior que', 'igual a', 'menor que']

function Table() {
  const [filter, setFilter] = useState(['']);
  const [collumsFilter, setCollumsFilter] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberComparison, setNumberComparison] = useState(0);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const { data, collums, loading } = useContext(TableContext);

  useEffect(() => (
    filter === '' ? setFilteredPlanets(data)
      : (
        setFilteredPlanets(data.filter((planet) => (
          (planet.name.match(filter))))))), [data, filter]);
  // rei dos parenteses

  // function submitFilter() {
  //   if (comparison === 'maior que') {
  //     return setFilteredPlanets(filteredPlanets.filter((planet) => planet[collumsFilter] > numberComparison));
  //   }
  //   if (comparison === 'menor que') {
  //     return setFilteredPlanets(filteredPlanets.filter((planet) => planet[collumsFilter] < numberComparison));
  //   }
  //   if (comparison === 'igual a') {
  //     return setFilteredPlanets(filteredPlanets.filter((planet) => planet[collumsFilter] === numberComparison));
  //   }
  // }

  function submitFilter() {
    switch (comparison) {
    case 'maior que':
      return setFilteredPlanets(data.filter((planet) => Number(planet[collumsFilter]) > Number(numberComparison)));
    case 'menor que':
      return setFilteredPlanets(data.filter((planet) => Number(planet[collumsFilter]) < Number(numberComparison)));
    case 'igual a':
      return setFilteredPlanets(data.filter((planet) => Number(planet[collumsFilter]) === Number(numberComparison)));
    default:
      return (data);
    }
  }

  return (
    loading === true ? <h1>...Loading</h1>
      : (
        <>
          <input
            type="text"
            placeholder="FilterByName"
            data-testid="name-filter"
            onChange={ ({ target: { value } }) => setFilter(value) }
          />
          <select
            name="column-filter"
            data-testid="column-filter"
            onChange={ ({ target: { value } }) => setCollumsFilter(value) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select
            name="comparison-filter"
            data-testid="comparison-filter"
            onChange={ ({ target: { value } }) => setComparison(value) }
          >
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
          <input
            type="number"
            data-testid="value-filter"
            onChange={ ({ target: { value } }) => setNumberComparison(value) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ submitFilter }
          >
            Filtrar
          </button>
          <table border="1">
            <thead>
              <tr>
                {collums.map((collum, index) => <th key={ index }>{collum}</th>)}
              </tr>
            </thead>
            <tbody>
              {filteredPlanets.map((planet, indexp) => (
                <tr key={ indexp }>
                  {collums.map((collum, index) => (
                    <td key={ index }>
                      { planet[collum] }
                    </td>))}
                </tr>)) }
            </tbody>
          </table>
        </>)
  );
}
export default Table;
