import React, { useContext, useState } from 'react';
import { ContextFromPlanets } from '../provider/Provider';

function Table() {
  const { data } = useContext(ContextFromPlanets);
  const [search, setSearch] = useState('');

  const handleChange = (e) => (
    setSearch(e.target.value.toLowerCase())
  );

  const inputSearch = () => (
    <input
      data-testid="name-filter"
      onChange={ handleChange }
    />
  );

  if (!data.length) return <div>Loading..</div>;

  const headerTable = () => (
    <thead>
      <tr>
        {Object.keys(data[0])
          .map((titulo) => (<th key={ titulo }>{titulo}</th>))}
      </tr>
    </thead>
  );

  const bodyTable = () => (
    <tbody>
      {data.filter((planet) => planet.name.toLowerCase().includes(search))
        .map((element) => (
          <tr key={ element }>
            {Object.values(element)
              .map((value) => <td key={ value }>{value}</td>)}
          </tr>))}
    </tbody>
  );

  return (
    <table>
      {headerTable()}
      {bodyTable()}
      {inputSearch()}
    </table>
  );
}

export default Table;
