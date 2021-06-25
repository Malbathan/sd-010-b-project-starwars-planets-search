import React, { useContext, useEffect, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

export default function Table() {
  const { planets, columns, filters, isFetching } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues } = filters;
  const [filteredPlanets, setFilteredPlanets] = useState(planets);

  useEffect(() => {
    setFilteredPlanets(planets);
  }, [planets]);

  useEffect(() => {
    function filter() {
      if (filterByNumericValues.length === 0) {
        return;
      }
      const { column, comparison, value } = filterByNumericValues[0];
      switch (comparison) {
      case 'maior que': {
        const filtered = filteredPlanets
          .filter((planet) => Number(planet[column]) > Number(value));
        setFilteredPlanets(filtered);
        break;
      }
      case 'menor que': {
        const filtered = filteredPlanets
          .filter((planet) => Number(planet[column]) < Number(value));
        setFilteredPlanets(filtered);
        break;
      }
      case 'igual a': {
        const filtered = filteredPlanets
          .filter((planet) => Number(planet[column]) === Number(value));
        setFilteredPlanets(filtered);
        break;
      }
      default: break;
      }
    }
    filter();
  }, [filterByNumericValues]);

  return isFetching ? <p>Loadding...</p> : (
    <table>
      <thead>
        <tr>
          {columns.map((title) => <th key={ title }>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          filteredPlanets
            .filter((planet) => planet.name.toUpperCase()
              .includes(filterByName.name.toUpperCase()))
            .map((planet) => (
              <tr key={ planet.name }>
                {Object.entries(planet)
                  .map((data, index) => <td key={ index }>{ data[1] }</td>)}
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}
