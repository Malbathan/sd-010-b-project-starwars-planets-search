import React, { useContext } from 'react';
import DataContext from '../Context/DataContext';

function Table() {
  const { data, filters: { filterByName,
    filterByNumericValues } } = useContext(DataContext);

  const filterPlanets = () => {
    let newData = data;
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      const filter = newData.filter(({ name }) => name.includes(filterByName))
        .filter((planet) => {
          if (comparison === 'maior que') {
            return parseInt(planet[column], 10) > parseInt(value, 10);
          }
          if (comparison === 'menor que') {
            return parseInt(planet[column], 10) < parseInt(value, 10);
          }
          if (comparison === 'igual a') {
            return parseInt(planet[column], 10) === parseInt(value, 10);
          }
          return planet;
        });
      newData = filter;
    });
    return newData;
  };

  function renderData() {
    return filterPlanets().map((planet) => {
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
