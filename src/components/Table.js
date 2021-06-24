import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

export default function Table() {
  const { isLoading, planetsList, fetchPlanetsList } = useContext(StarWarsContext);

  useEffect(fetchPlanetsList, []);

  const THeaders = [planetsList.name];
  return (
    !isLoading
      ? (
        <table>
          <tbody>
            <tr>
              {THeaders.map((title, i) => <th key={ i }>{title}</th>)}
            </tr>
            <tr />
          </tbody>
        </table>
      )
      : (<h1>Loading...</h1>)
  );
}
