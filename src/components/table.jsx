import React, { useContext } from 'react';
import Thead from './Thead';

import { Context } from './Provider/Provider';

const MINUS_ONE = -1;

const RenderTable = () => {
  const batata = useContext(Context);
  const { data, filterOptions, filterByColumn, orderSort: { order },
    filterNumeric: { filterByNumericValues } } = batata;
  const { column, comparison, value,
  } = filterByNumericValues[filterByNumericValues.length - 1];

  const sortAscendet = (param, ordem) => {
    if (filterByColumn
      .includes(ordem)) { return param.sort((a, b) => a[ordem] - b[ordem]); }
    return param.sort((a, b) => {
      if (a[ordem] > b[ordem]) {
        return 1;
      }
      if (a[ordem] < b[ordem]) {
        return MINUS_ONE;
      }
      return 0;
    });
  };

  const sortDescendent = (param, ordem) => {
    if (filterByColumn.includes(ordem)) {
      return param
        .sort((a, b) => b[ordem] - a[ordem]);
    }
    return param.sort((a, b) => {
      if (b[ordem] > a[ordem]) {
        return 1;
      }
      if (b[ordem] < a[ordem]) {
        return MINUS_ONE;
      }
      return 0;
    });
  };

  const sortAll = (param) => {
    const defaultValue = param.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return MINUS_ONE;
      }
      return 0;
    });
    // console.log(defaultValue);

    // console.log(filterByColumn);
    // console.log(filterByColumn.includes(order.column));

    // console.log(order.column);
    // console.log(order.sort);
    if (order.column !== undefined) {
      // console.log('entrei');
      const ordem = order.column;
      if (order.sort === 'ASC') { return sortAscendet(param, ordem); }
      return sortDescendent(param, ordem);
    }

    return defaultValue;
  };

  return (
    <table>
      <Thead />

      <tbody>
        { sortAll(data)
          .filter((planet) => filterOptions(planet, column, comparison, Number(value)))
          // planet, column, comparison, Number(value)
          .map((item, index) => (
            <tr key={ index }>
              <td data-testid="planet-name">
                { item.name }
              </td>
              <td>
                {item.rotation_period}
              </td>
              <td>
                {item.orbital_period}
              </td>
              <td>
                {item.diameter}
              </td>
              <td>
                {item.climate}
              </td>
              <td>
                {item.gravity}
              </td>
              <td>
                {item.terrain}
              </td>
              <td>
                {item.surface_water}
              </td>
              <td>
                {item.population}
              </td>
              <td>
                {item.residents}
              </td>
              <td>
                {item.films}
              </td>
              <td>
                {item.created}
              </td>
              <td>
                {item.edited}
              </td>
            </tr>))}
      </tbody>
    </table>
  );
};

export default RenderTable;
