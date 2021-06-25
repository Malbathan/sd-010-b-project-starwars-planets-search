import React, { useContext, useState, useEffect } from 'react';
import TableContext from '../context/tablecontext';
// option colums ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']
// option ['maior que', 'igual a', 'menor que']

function Table() {
  const [filter, setFilter] = useState(['']);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const { data, collums } = useContext(TableContext);

  useEffect(() => (
    filter === '' ? setFilteredPlanets(data)
      : (
        setFilteredPlanets(data.filter((planet) => (
          (planet.name.match(filter))))))), [data, filter]);
  // rei dos parenteses
  console.log(data);
  return (
    <>
      <select name="column-filter" data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select name="comparison-filter" data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input type="number" data-testid="value-filter" />
      <input
        type="text"
        placeholder="FilterByName"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => setFilter(value) }
      />
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
    </>
  );
}
export default Table;
