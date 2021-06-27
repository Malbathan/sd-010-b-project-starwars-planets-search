import React, { useContext } from 'react';

import DataContext from '../../context';

function Table() {
  const { table, data, filtro } = useContext(DataContext);

  const dataFilter = data.filter((planet) => planet.name
    .toUpperCase().includes(filtro.filterByName.toUpperCase()));

  function TableContent() {
    if (data) {
      return (
        dataFilter.map((planet, index) => (
          <tr key={ index }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>))
      );
    }
  }

  return (
    <section>
      <table>
        <tr>
          {
            // Monta o cabeçalho com os titulos, cada key
            table.filter((item) => item !== 'residents').map((head, index) => (
              <th key={ index }>{head}</th>
            ))
          }
        </tr>
        {/* Monta o conteúdo da tabela */}
        {TableContent()}
      </table>
    </section>
  );
}

export default Table;
