import React, { useContext } from 'react';
import { FiltersContext, PlanetsContext } from '../context';

function Table() {
  const { filteredValues } = useContext(PlanetsContext);
  useContext(FiltersContext); // sem esta linha não funciona a parte de ordenação

  const tableHeader = () => {
    const headerValues = Object.keys(filteredValues[0] || []);
    const residentsIndex = headerValues.indexOf('residents');
    if (residentsIndex >= 0) {
      headerValues.splice(residentsIndex, 1);
      return headerValues;
    }
    return headerValues;
  };

  return (
    <table>
      <thead>
        <tr>
          {tableHeader().map((elementHeader) => (
            <th key={ elementHeader }>
              {elementHeader}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredValues.map((planet) => {
          delete planet.residents;
          return (
            <tr key={ planet.name }>
              {Object.values(planet).map((elementBody, index) => {
                if (index === 0) {
                  return (
                    <td
                      key={ `${planet.name}${elementBody}` }
                      data-testid="planet-name"
                    >
                      {elementBody}
                    </td>);
                }
                return <td key={ `${planet.name}${elementBody}` }>{elementBody}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;

// REF_1: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
