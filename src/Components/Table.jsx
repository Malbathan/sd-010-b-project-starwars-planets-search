import React, { useContext } from 'react';
import DataContext from '../Context/DataContext';

function Table() {
  const { data } = useContext(DataContext);

  function renderData() {
    return data.map((planet) => {
      const attributes = Object.values(planet);
      return (
        <tr key={ planet.name }>
          { attributes.map((attribute, index) => <td key={ index }>{ attribute }</td>) }
        </tr>
      );
    });
  }

  if (data.length < 1) return <div>...Carregando</div>;
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Período Orbital</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água na superfíce</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criação</th>
          <th>Edição</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        { renderData() }
      </tbody>
    </table>
  );
}

export default Table;
