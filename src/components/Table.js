import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

export default function Table() {
  const { isLoading, planetsList, fetchPlanetsList } = useContext(StarWarsContext);

  useEffect(fetchPlanetsList, []);

  const generateTableCollumns = (planetInfo) => (
    Object.values(planetInfo).map((info, index) => <td key={ index }>{info}</td>)
  );

  const TableInfo = [...planetsList];
  return (
    !isLoading
      ? (
        <table>
          <tbody>
            {TableInfo
              .map((planet, i) => (<tr key={ i }>{generateTableCollumns(planet)}</tr>))}
          </tbody>
        </table>
      )
      : (<h1>Loading...</h1>)
  );
}
