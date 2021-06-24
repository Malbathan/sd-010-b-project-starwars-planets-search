import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

export default function Table() {
  const { isLoading, planetsList, fetchPlanetsList } = useContext(StarWarsContext);

  useEffect(fetchPlanetsList, []);

  const generateTableRows = (tableInfo, keyIdentifyer) => (
    <tr>
      {tableInfo.map((tbData, i) => <td key={ i }>{tbData[keyIdentifyer]}</td>)}
    </tr>
  );

  const TableInfo = [...planetsList];
  return (
    !isLoading
      ? (
        <table>
          <tbody>
            <tr>
              {TableInfo.map((headers, i) => <th key={ i }>{headers.name}</th>)}
            </tr>
            {generateTableRows(TableInfo, 'rotation_period')}
            {generateTableRows(TableInfo, 'orbital_period')}
            {generateTableRows(TableInfo, 'diameter')}
            {generateTableRows(TableInfo, 'climate')}
            {generateTableRows(TableInfo, 'gravity')}
            {generateTableRows(TableInfo, 'terrain')}
            {generateTableRows(TableInfo, 'surface_water')}
            {generateTableRows(TableInfo, 'population')}
            {generateTableRows(TableInfo, 'residents')}
            {generateTableRows(TableInfo, 'films')}
            {generateTableRows(TableInfo, 'created')}
            {generateTableRows(TableInfo, 'edited')}
            {generateTableRows(TableInfo, 'url')}
          </tbody>
        </table>
      )
      : (<h1>Loading...</h1>)
  );
}
