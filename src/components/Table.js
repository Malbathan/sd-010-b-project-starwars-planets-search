import React, { useContext } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

export default function Table() {
  const { isLoading, filtered } = useContext(StarWarsContext);

  const generateTableHeaders = (object1) => {
    if (object1) { return Object.keys(object1).map((key) => <th key={ key }>{key}</th>); }
  };

  // PERGUNTAR NUM PLANTAO COMO RESOLVER COM FOR-IN

  const generateTableCollumns = (planetInfo) => (
    Object.values(planetInfo).map((info, index) => <td key={ index }>{info}</td>));
  return (
    !isLoading
      ? (
        <table>
          <tbody>
            <tr>{generateTableHeaders(filtered[0])}</tr>
            {filtered
              .map((planet, i) => (<tr key={ i }>{generateTableCollumns(planet)}</tr>))}
          </tbody>
        </table>
      )
      : (<h1>Loading...</h1>)
  );
}
