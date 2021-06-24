import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';
import useFetchApiPlanets from '../Hooks/apiPlanets';
import './table.css';

export default function Table() {
  const { data, setData } = useContext(StarWarsContext);
  const { results } = useFetchApiPlanets();
  let tableHeads = [];

  if (results !== undefined) {
    results.map((planet) => delete planet.residents);
    setData(results);
  }
  if (Object.keys(data).length !== 0) {
    tableHeads = Object.keys(data[0]);
  }

  return (

    ((Object.keys(data).length === 0)) ? <h1>Loading...</h1>
      : (
        <table className="table">
          <thead>
            <tr>
              {tableHeads.map((el, key) => (
                <th key={ key }>
                  {el.replace(/_/g, ' ')
                    .replace(/\b([a-zÁ-ú]{3,})/g,
                      (w) => w.charAt(0).toUpperCase() + w.slice(1))}
                  {/* https://stackoverflow.com/questions/6251463/regex-capitalize-first-letter-every-word-also-after-a-special-character-like-a */}
                </th>))}
            </tr>
          </thead>
          <tbody>
            {data.map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>
                  { planet.orbital_period }
                </td>
                <td>
                  { planet.diameter }
                </td>
                <td>
                  { planet.climate }
                </td>
                <td>
                  { planet.gravity }
                </td>
                <td>
                  { planet.terrain }
                </td>
                <td>
                  { planet.surface_water }
                </td>
                <td>
                  { planet.population }
                </td>
                <td>
                  <a href={ planet.films }>{planet.films}</a>
                </td>
                <td>
                  { planet.created }
                </td>
                <td>
                  { planet.edited }
                </td>
                <td>
                  <a href={ planet.url }>{ planet.url }</a>
                </td>
              </tr>))}
          </tbody>
        </table>
      )
  );
}
