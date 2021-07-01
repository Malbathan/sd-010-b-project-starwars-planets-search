import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';
import FetchPlanetAPI from '../services/serviceAPI';

import './Table.css';

function Table() {
  const { results } = FetchPlanetAPI();
  const { data, setData } = useContext(SearchContext);

  if (results !== undefined) {
    results.map((planeta) => delete planeta.residents);
    setData(results);
  }

  let titulo = [];
  if (data.length > 0) {
    titulo = Object.keys(data[0]);
  }

  //  TABELA E REGEX - HENRIQUE ZÓZIMO
  return (
    (data.length > 0
      ? (
        <table className="planetas">
          <thead>
            <tr>
              {titulo.map((title, index) => (
                <th key={ index }>
                  {title.replace(/_/g, ' ')
                    .replace(/\b([a-zÁ-ú]{3,})/g,
                      (w) => w.charAt(0).toUpperCase() + w.slice(1))}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>)
      : null)
  );
}

export default Table;