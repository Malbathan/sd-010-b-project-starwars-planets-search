import React, { useContext, useEffect, useState } from 'react';
import SearchContext from '../context/SearchContext';
import FetchPlanetAPI from '../services/serviceAPI';

import './Table.css';

function Table() {
  const { results } = FetchPlanetAPI();
  const { data, setData, filtraNome } = useContext(SearchContext);
  const [filtrar, setFiltrar] = useState(data);

  if (results !== undefined) {
    results.map((planeta) => delete planeta.residents);
    setData(results);
  }

  useEffect(() => {
    const { name } = filtraNome.filterByName;
    const filtraPeloNome = (name !== '')
      ? data.filter((planeta) => (planeta.name).toLowerCase().includes(name)) : data;
    const { column } = filtraNome.filterByNumericValues[0];
    const { comparision } = filtraNome.filterByNumericValues[0];
    const { value } = filtraNome.filterByNumericValues[0];
    const filtraDados = filtraPeloNome.filter((planeta) => {
      switch (comparision) {
      case 'maior que': return parseFloat(planeta[column]) > parseFloat(value);
      case 'igual a': return parseFloat(planeta[column]) === parseFloat(value);
      case 'menor que': return parseFloat(planeta[column]) < parseFloat(value);
      default: return true;
      }
    });
    setFiltrar(filtraDados);
  }, [data, filtraNome.filterByName, filtraNome.filterByNumericValues]);

  let titulo = [];
  if (data.length > 0) {
    titulo = Object.keys(data[0]);
  }

  return (
    (data.length > 0
      ? (
        <table className="planetas">
          <thead>
            <tr>
              {titulo.map((title, index) => (
                <th key={ index }>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtrar.map((planet) => (
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
