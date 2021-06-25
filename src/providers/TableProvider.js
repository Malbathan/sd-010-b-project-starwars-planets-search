import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableContext from '../context/tablecontext';
import getplanets from '../services/data';

const TableProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [collums, setCollums] = useState([]);
  const [planetName, setPlanetName] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    const dataSet = async () => {
      setLoading(true);
      const res = await getplanets();
      res.results.forEach((planet) => {
        delete planet.residents;
      });
      setData(res.results);
      // colunas abaixo!!! TRs
      setCollums(Object.keys(res.results[0]));
      setPlanetName(res.results.map((planet) => planet.name));
      setLoading(false);
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
    setLoading,
    loading,
  };
  return (
    <TableContext.Provider value={ contextOfTable }>
      {children}
    </TableContext.Provider>
  );
};

TableProvider.propTypes = ({
  children: PropTypes.func,
}).isRequired;

export default TableProvider;
