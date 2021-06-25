import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { data } = useContext(AppContext);
  const [keys, setKeys] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  useEffect(() => {
    if (data.length) {
      const allKey = Object.keys(data[0]);
      setKeys(allKey.filter((key) => key !== 'residents'));
    }
  }, [data]);

  // console.log(keys);
  const filterName = ({ value }) => {
    setFilter({ ...filter, filters: { filterByName: { name: value } } });
  };

  return (
    <div>
      <label htmlFor="filter">
        <input
          id="filter"
          type="text"
          onChange={ ({ target }) => filterName(target) }
          data-testid="name-filter"
        />
      </label>
      <table border="1px">
        <tr>
          {keys.map((key) => (
            <th key={ key }>
              {key}
            </th>
          ))}
        </tr>
        {data.filter((e) => e.name.includes(filter.filters.filterByName.name))
          .map((planet, index) => (
            <tr key={ index }>
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
      </table>
    </div>
  );
}

export default Table;

// Agradecimentos Turma 10-B a Daniel Roberto, Raphael Gumieri, Lucas Martins, Jefferson Andrade
