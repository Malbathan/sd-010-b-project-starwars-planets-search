import React, { useState, useEffect } from 'react';
import TableContext from '../context/tablecontext';
import getplanets from '../services/data';

const TableProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [collums, setCollums] = useState([]);
  const [planetName, setPlanetName] = useState([]);

  useEffect(() => {
    const dataSet = async () => {
      const res = await getplanets();
      res.results.forEach((planet) => {
        delete planet.residents;
      });
      setData(res.results);
      // colunas abaixo!!! TRs
      setCollums(Object.keys(res.results[0]));
      setPlanetName(res.results.map((planet) => planet.name));
    };
    dataSet();
  }, []);
  const contextOfTable = {
    setData,
    data,
    setCollums,
    collums,
    setPlanetName,
    planetName,
  };
  return (
    <TableContext.Provider value={ contextOfTable }>
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
