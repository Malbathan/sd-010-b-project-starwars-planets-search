import React, { useContext } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

export default function Table() {
  const { isLoading, data } = useContext(StarWarsContext);

  const generateTableHeaders = (object1) => {
    if (object1) { return Object.keys(object1).map((key) => <th key={ key }>{key}</th>); }
  };

  // PERGUNTAR NUM PLANTAO COMO RESOLVER COM FOR-IN

  // const generateTableHeaders = (object1) => {
  //   for (const head in object1) {
  //     // if (Object.prototype.hasOwnProperty.call(object1, head)) {
  //     return <th>{head}</th>;
  //     // }
  //   }
  // };

  const generateTableCollumns = (planetInfo) => (
    Object.values(planetInfo).map((info, index) => <td key={ index }>{info}</td>)
  );

  const tableInfo = [...data];
  // const tableHeaders = [...headers];
  return (
    !isLoading
      ? (
        <table>
          <tbody>
            <tr>{generateTableHeaders(tableInfo[0])}</tr>
            {/* <tr>{tableHeaders.map((ele, i) => <th key={ i }>{ele}</th>)}</tr> */}
            {tableInfo
              .map((planet, i) => (<tr key={ i }>{generateTableCollumns(planet)}</tr>))}
          </tbody>
        </table>
      )
      : (<h1>Loading...</h1>)
  );
}
