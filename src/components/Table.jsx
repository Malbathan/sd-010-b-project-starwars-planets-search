import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  const [keys, setKeys] = useState([]);
  const [dataByName, setDataByName] = useState([]);

  const handleDataByName = ({ value }) => {
    const dataFiltered = data.filter(({ name }) => {
      const nameLowerCase = name.toLowerCase();
      const valueLowerCase = value.toLowerCase();
      return nameLowerCase.includes(valueLowerCase);
    });
    setDataByName(dataFiltered);
  };

  const trueData = () => {
    if (dataByName.length > 0) return dataByName;
    return data;
  };

  useEffect(() => {
    if (data.length) {
      const allKeys = Object.keys(data[0]);
      setKeys(allKeys.filter((key) => key !== 'residents'));
    }
  }, [data]);

  const truePlanets = trueData();

  return (
    <>
      <header>
        <label htmlFor="nameFilter">
          <input
            type="text"
            name="nameFilter"
            data-testid="name-filter"
            onChange={ ({ target }) => handleDataByName(target) }
          />
        </label>
      </header>
      <table>
        <tbody>
          <tr>
            {keys.map((key) => <th key={ key }>{key}</th>)}
          </tr>
          {truePlanets.map((planet) => (
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
            </tr>))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
