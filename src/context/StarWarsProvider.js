import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/Api/StarWarsApi';
import ColumnOptions from '../components/ColumnOptions';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [columnOptions, setColumnOptions] = useState(ColumnOptions);
  // const [clearFilter, setClearFilter] = useState(false);
  const [filterByNumeric, setFilterByNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  });

  useEffect(() => {
    const getApi = async () => {
      const teste = await fetchApi();
      await setData(teste);
    };
    getApi();
  }, []);

  const filterNumeric = ({ target: { name, value } }) => {
    setFilterByNumeric({
      ...filterByNumeric,
      [name]: value,
    });
  };

  const removeOption = (e) => {
    const filterColumn = columnOptions.filter((item) => item !== e);
    setColumnOptions(
      filterColumn,
    );
  };

  const aplyFilter = () => {
    const { comparison, value, column } = filterByNumeric;
    let newData = data;
    if (comparison === 'maior que') {
      newData = data.filter((item) => (Number(item[column]) > Number(value)));
    }
    if (comparison === 'menor que') {
      newData = data.filter((item) => (Number(item[column]) < Number(value)));
    }
    if (comparison === 'igual a') {
      newData = data.filter((item) => Number(item[column]) === Number(value));
    }
    setData(newData);
    removeOption(column);
  };

  const context = {
    setFilter,
    filterNumeric,
    aplyFilter,
    data,
    filterByNumeric,
    columnOptions,
    filters: {
      filterByName: { name: filter },
    },
  };

  return (
    <StarWarsContext.Provider
      value={ context }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
