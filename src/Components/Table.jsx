import React, { useContext } from 'react';

import ApiContext from '../Context/ApiContext';

function Table() {
  const { data, filters } = useContext(ApiContext);

  const { filterByNumericValues } = filters;
  const [...filtros] = filterByNumericValues;

  const avaliaComparison = (planeta) => {
    if (filtros.length) {
      return filtros.every((filter) => {
        // console.log(filter);
        switch (filter.comparison) {
        case 'maior que':
          // console.log(parseInt(planeta[filter.column], 10) > parseInt(filter.value, 10));
          return parseInt(planeta[filter.column], 10) > parseInt(filter.value, 10);
        case 'menor que':
          return parseInt(planeta[filter.column], 10) < parseInt(filter.value, 10);
        case 'igual a':
          return parseInt(planeta[filter.column], 10) === parseInt(filter.value, 10);
        default:
          return null;
        }
      });
    }
    return planeta;
  };

  if (!data) return (<p>Loading...</p>);

  return (
    <table border="2">
      {
        data.map((planeta, index) => {
          delete planeta.residents;
          const headers = Object.keys(planeta);
          if (index === 0) {
            return (
              <thead key={ index }>
                <tr>
                  { headers.map((header, headerIndex) => (
                    <th key={ headerIndex }>
                      { header }
                    </th>)) }
                </tr>
              </thead>
            );
          } return null;
        })
      }
      {
        data
          .filter((planeta) => planeta.name.includes(filters.filterByName.name))
          .filter((planeta) => avaliaComparison(planeta))
          .map((planeta, index) => {
            const values = Object.values(planeta);
            return (
              <tbody key={ index }>
                <tr>
                  { values.map((planetValue, valueIndex) => (
                    <td key={ valueIndex }>
                      { planetValue }
                    </td>))}
                </tr>
              </tbody>
            );
          })
      }
    </table>
  );
}

export default Table;
