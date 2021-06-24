import React, { useEffect, useContext } from 'react';
import ContextStarWars from '../context/ContextStarWars';

function Table() {
  const { data, setData } = useContext(ContextStarWars);

  useEffect(() => {
    async function featchPlanets() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const objResponse = await fetch(url).then((results) => results.json());
      const arrayPlanets = objResponse.results.map((obj) => {
        delete obj.residents;
        return obj;
      });
      setData(arrayPlanets);
    }

    featchPlanets();
  }, [setData]);

  let arrayHeaders = null;

  if (data[0]) {
    arrayHeaders = Object.keys(data[0]);
  }

  const getTableHead = () => {
    let tableHeaders;
    if (arrayHeaders) {
      tableHeaders = arrayHeaders.map((header) => <th key={ header }>{header}</th>);
    }
    return tableHeaders;
  };

  const getdata = () => data.map((obj) => (
    <tr key={ obj.name }>
      {arrayHeaders.map((key) => <td key={ key }>{obj[key]}</td>)}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          {getTableHead()}
        </tr>
      </thead>
      <tbody>
        {getdata()}
      </tbody>
    </table>
  );
}

export default Table;
