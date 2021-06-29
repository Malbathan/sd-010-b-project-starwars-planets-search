import React, { useContext } from 'react';
import ApiContext from '../services/ApiContext';

function Table() {
  const { data, table, filter } = useContext(ApiContext);
  const tableLoaded = table.length > 0;
  const filterLoaded = filter !== null;

  return (
    <table>
      <thead>
        { tableLoaded && (
          <tr>
            { table.map((head) => (
              <th key={ head }>{ head }</th>
            )) }
          </tr>
        ) }
      </thead>
      <tbody>
        { filterLoaded ? (
          filter.map((planet) => {
            const planetData = Object.entries(planet);
            return (
              <tr key={ planet.name }>
                { planetData.map(([key, field]) => (
                  <td key={ key }>{ field }</td>
                )) }
              </tr>
            );
          })) : (data.map((planet) => {
          const planetData = Object.entries(planet);
          return (
            <tr key={ planet.name }>
              { planetData.map(([key, field]) => (
                <td key={ key }>{ field }</td>
              )) }
            </tr>
          );
        }))}
      </tbody>
    </table>
  );
}

export default Table;
