import React, { useContext, useState } from 'react';
import TableContext from '../context/tablecontext';

function Table() {
  const [filter, setFilter] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const { data, collums } = useContext(TableContext);

  return (
    <>
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
          {data.map((planet, indexp) => (
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
