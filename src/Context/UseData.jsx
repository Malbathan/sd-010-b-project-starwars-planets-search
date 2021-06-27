import React, { useContext } from 'react';
import DataContext from './DataContext';

function useData(callback) {
  const {
    filters: { filterByName, order: { column: sortedColumn, sort } },
  } = useContext(DataContext);
  // if (data.length < 1) return <tr><td>...Carregando</td></tr>;
  const comparison = 1;
  return callback()
    .filter(({ name }) => name.includes(filterByName))
    .sort((planetA, planetB) => {
      if (!parseInt(planetA[sortedColumn], 10)) {
        if (sort === 'ASC') {
          return (
            planetA[sortedColumn] < planetB[sortedColumn] ? -comparison : 1
          );
        }
        return (planetA[sortedColumn] > planetB[sortedColumn] ? -comparison : 1);
      }
      const numA = parseInt(planetA[sortedColumn], 10);
      const numB = parseInt(planetB[sortedColumn], 10);
      if (sort === 'ASC') {
        return numA - numB;
      }
      return numB - numA;
    })
    .map((planet) => {
      const attributes = Object.values(planet);
      return (
        <tr key={ planet.name }>
          { attributes.map((attribute, index) => {
            if (index === 0) {
              return (
                <td key={ index } data-testid="planet-name">{ attribute }</td>
              );
            }
            return <td key={ index }>{ attribute }</td>;
          }) }
        </tr>
      );
    });
}

export default useData;
