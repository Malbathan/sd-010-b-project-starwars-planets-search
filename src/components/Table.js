import React, { useContext } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

export default function Table() {
  const { isLoading, filtered } = useContext(StarWarsContext);

  // PERGUNTAR NUM PLANTAO COMO RESOLVER COM FOR-IN:
  const generateTableHeaders = (object1) => {
    if (object1) { return Object.keys(object1).map((key) => <th key={ key }>{key}</th>); }
  };

  const generateTableLines = (planetInfo) => (
    Object.values(planetInfo).map((info, i) => (i === 0
      ? (<td data-testid="planet-name" key={ info }>{info}</td>)
      : (<td key={ info }>{info}</td>))));
  return (
    !isLoading
      ? (
        <table>
          <tbody>
            <tr>{generateTableHeaders(filtered[0])}</tr>
            {filtered
              .map((planet) => (
                <tr key={ planet.name }>{generateTableLines(planet)}</tr>))}
          </tbody>
        </table>
      )
      : (<h1>Loading...</h1>)
  );
}
