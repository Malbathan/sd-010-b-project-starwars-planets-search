import React, { useContext } from 'react';
import AppContext from '../contextApi/Context';
import RenderTableByName from './RenderTableByName';

function Table() {
  const { listOfContext: {
    state: { data,
      filters: { filterByName },
    } } } = useContext(AppContext);

  const { listOfContext: {
    state: {
      filters: {
        filterByValue: { column, comparison, value } } } } } = useContext(AppContext);

  let planetTable = data;

  if (filterByName.name) {
    planetTable = data.filter((planet) => (
      planet.name.toLowerCase().includes(filterByName.name)));
  }

  if (column && comparison && value) {
    // procura a key com o valor de column
    // entra em condição para saber em qual vai renderizar (<  >  ou  =)
    // compara o valor com o value mapeado
    console.log('Complete!');
  }

  return (
    <div>
      <table>
        {RenderTableByName(planetTable)}
      </table>
    </div>
  );
}
// filter = data e faz o map

export default Table;
