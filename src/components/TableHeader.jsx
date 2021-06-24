import React, { useContext } from 'react';
import { StarWarsContext } from '../provider/Provider';

function TableHeader() {
  const { data } = useContext(StarWarsContext);
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
  // devo fazer um filter abaixo para o proximo requisito, não esquercer.
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

export default TableHeader;
