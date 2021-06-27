import React, { useContext } from 'react';

import DataContext from '../../context';

function Table() {
  const { table, data, filtro, filtrar } = useContext(DataContext);

  // Faz o filtro com o parametro recebido via context do input
  let dataFilter = data.filter((planet) => planet.name
    .toUpperCase().includes(filtro.filterByName.name.toUpperCase()));

  if (filtrar) {
    const { column, comparison, value } = filtro.filterByNumericValues[0];
    if (comparison === 'maior que') {
      dataFilter = data.filter(({ [`${column}`]: columnRef }) => parseInt(columnRef, 10)
      > parseInt(value, 10));
    } if (comparison === 'menor que') {
      dataFilter = data.filter(({ [`${column}`]: columnRef }) => parseInt(columnRef, 10)
      < parseInt(value, 10));
    } if (comparison === 'igual a') {
      dataFilter = data.filter(({ [`${column}`]: columnRef }) => parseInt(columnRef, 10)
      === parseInt(value, 10));
    }
  }

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
