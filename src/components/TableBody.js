import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TableBody() {
  const { data, filters } = useContext(StarWarsContext);
  const filterValue = filters.filterByNumericValues;
  let filter = data;
  if (filters.filterByName.name !== '') {
    filter = data.filter((filterInfo) => (
      filterInfo.name.toLowerCase().includes(filters.filterByName.name)));
  }

  if (filterValue.length > 0) {
    switch (filterValue[0].comparison) {
    case 'maior que':
      filter = data.filter((filterInfo) => (
        parseFloat(filterInfo[filterValue[0].column]) > parseFloat(filterValue[0].value)
      ));
      break;
    case 'menor que':
      filter = data.filter((filterInfo) => (
        filterInfo[filterValue[0].column] < filterValue[0].value || (
          filterInfo[filterValue[0].column] === 'unknown')));
      break;
    default:
      filter = data.filter((filterInfo) => (
        filterInfo[filterValue[0].column] === filterValue[0].value));
      break;
    }
    console.log(filterValue);
  }
  return (
    <tbody>
      {filter.filter((result) => Object.keys(result) !== 'residents').map((info) => (
        <tr key={ info.name }>
          <td>{ info.name }</td>
          <td>{ info.rotation_period }</td>
          <td>{ info.orbital_period }</td>
          <td>{ info.diameter }</td>
          <td>{ info.climate }</td>
          <td>{ info.gravity }</td>
          <td>{ info.terrain }</td>
          <td>{ info.surface_water }</td>
          <td>{ info.population }</td>
          <td>{ info.films }</td>
          <td>{ info.created }</td>
          <td>{ info.edited }</td>
          <td>{ info.url }</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
