import React, { useContext } from 'react';

import DataContext from '../context/DataContext';

function Table() {
  const { tableHead, data, filters, isFilterByNumericValues, setIsFilterByNumericValues } = useContext(DataContext);

  function HeadForTable() {
    const headFiltered = tableHead.filter((item) => item !== 'residents');
    if (tableHead) {
      return (
        headFiltered.map((head, index) => (
          <th key={ index }>{head}</th>
        ))
      );
    }
  }

  function TableStructure(info) {
    return (
      info.map(({
        name,
        rotation_period: rotationPeriod,
        orbital_period: orbitalPeriod,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water: surfaceWater,
        population,
        films,
        created,
        edited,
        url,
      }, index) => (
        <tr key={ index }>
          <td>{ name }</td>
          <td>{ rotationPeriod }</td>
          <td>{ orbitalPeriod }</td>
          <td>{ diameter }</td>
          <td>{ climate }</td>
          <td>{ gravity }</td>
          <td>{ terrain }</td>
          <td>{ surfaceWater }</td>
          <td>{ population }</td>
          <td>{ films }</td>
          <td>{ created }</td>
          <td>{ edited }</td>
          <td>{ url }</td>
        </tr>
      ))
    );
  }

  function search(obj) {
    const numberDefault = -1;
    const { filterByName: { name } } = filters;
    const renderState = obj
      .filter((item) => item.name.toLowerCase().indexOf(name) > numberDefault);
    return TableStructure(renderState);
  }

  function searchByNumericValues(obj) {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    let renderFiltered = [];

    if (comparison === 'maior que') {
      renderFiltered = obj
        .filter((item) => parseInt(item[column], 10) > parseInt(value, 10));
    }
    if (comparison === 'menor que') {
      renderFiltered = obj
        .filter((item) => parseInt(item[column], 10) < parseInt(value, 10));
    }
    if (comparison === 'igual a') {
      renderFiltered = obj
        .filter((item) => parseInt(item[column], 10) === parseInt(value, 10));
    }

    return TableStructure(renderFiltered);
  }
  return (
    <section>
      <table>
        <tr>
          {HeadForTable()}
        </tr>
        {isFilterByNumericValues ? searchByNumericValues(data) : search(data)}
      </table>
    </section>
  );
}

export default Table;
