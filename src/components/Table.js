import React, { useEffect, useState, useContext } from 'react';
import starWarsContext from '../context/startWarsContext';
import fetchStarWars from '../services/starwarsAPI';

function Table() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const { filter: { filters:
    { filterByName, filterByNumericValues } } } = useContext(starWarsContext);
  // compenetDidMount
  const { name } = filterByName;
  const { column, comparison, value } = filterByNumericValues[0];

  useEffect(() => {
    const getStarWarsPlanets = async () => {
      const dados = await fetchStarWars();
      // console.log(name.length);
      // console.log(dados);
      setData(dados);
    };
    getStarWarsPlanets();
  }, []);

  useEffect(() => {
    if (name.length !== 0) {
      // console.log('aqui');
      const dadosnovos = data.filter(
        (element) => element.name.includes(name),
      );
      setNewData(dadosnovos);
    } else {
      setNewData([]);
    }
  }, [data, name]);

  useEffect(() => {
    if (comparison === '>') {
      // console.log(`${column}`);
      // console.log(dados);
      // console.log(dados[0][`${column}`]);
      const dadosnovos = data.filter(
        (element) => parseFloat(element[`${column}`]) > `${value}`,
      );
      setNewData(dadosnovos);
    } else if (comparison === '<') {
      const dadosnovos = data.filter(
        (element) => parseFloat(element[`${column}`]) < `${value}`,
      );
      setNewData(dadosnovos);
    } else if (comparison === '=') {
      const dadosnovos = data.filter(
        (element) => parseFloat(element[`${column}`]) === `${value}`,
      );
      setNewData(dadosnovos);
    } else {
      setNewData([]);
    }
  }, [column, comparison, data, value]);

  function filtro(array) {
    return (array.map((planet) => (
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
    )));
  }

  return (
    <table>
      <thead>
        <tr>
          {data.length > 0
          && (Object.keys(data[0]).map((element) => element !== 'residents'
          && <th key={ element }>{element}</th>))}
        </tr>
      </thead>
      <tbody>
        {newData.length > 0 ? filtro(newData) : filtro(data)}
      </tbody>
    </table>
  );
}

export default Table;
