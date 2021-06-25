import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';
import useFetchApiPlanets from '../Hooks/apiPlanets';
import './table.css';

export default function Table() {
  const { data, setData, filters } = useContext(StarWarsContext);
  const [filtered, setFiltered] = useState(data);
  const { results } = useFetchApiPlanets();
  let tableHeads = [];

  if (results !== undefined) {
    results.map((planet) => delete planet.residents);
    setData(results);
  }
  if (data.length > 0) {
    tableHeads = Object.keys(data[0]);
  }

  useEffect(() => {
    const { name } = filters.filterByName;
    let filteredNow = (name !== '')
      ? data.filter((planet) => (planet.name).toLowerCase().includes(name))
      : data;
    console.log(filters.filterByNumericValues);
    if (filters.filterByNumericValues !== undefined) {
      const { column } = filters.filterByNumericValues[0];
      const { comparison } = filters.filterByNumericValues[0];
      const { value } = filters.filterByNumericValues[0];
      console.log(column, comparison, value);
      filteredNow = (value !== 0 && column !== '' && comparison !== '')
        ? data.filter((planet) => {
          if (comparison === 'maior que') return planet[column] > value;
          if (comparison === 'igual') return planet[column] === value;
          return planet[column] < value;
        })
        : data;
      setFiltered(filteredNow);
    }
  }, [data, filters]);

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
            {filtered.map((planet) => (
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
