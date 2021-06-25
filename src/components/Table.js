import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

export default function Table() {
  const { isLoading, data, fetchPlanetsList, headers } = useContext(StarWarsContext);

  useEffect(fetchPlanetsList, []);

  // const generateTableHeaders = (object1) => Object.keys(object1).map((key) => <th>{key}</th>);

  const generateTableCollumns = (planetInfo) => (
    Object.values(planetInfo).map((info, index) => <td key={ index }>{info}</td>)
  );

  const tableInfo = [...data];
  const tableHeaders = [...headers];
  return (
    !isLoading
      ? (
        <table>
          <tbody>
            {/* <tr>{generateTableHeaders(tableInfo)}</tr> */}
            <tr>{tableHeaders.map((ele, i) => <th key={ i }>{ele}</th>)}</tr>
            {tableInfo
              .map((planet, i) => (<tr key={ i }>{generateTableCollumns(planet)}</tr>))}
          </tbody>
        </table>
      )
      : (<h1>Loading...</h1>)
  );
}
