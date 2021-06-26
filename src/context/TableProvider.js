import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';
import testData from '../testData';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  });
  // const [filterByNumericValue, setFilterByNumericValue] = useState([]);
  const getPlanets = async () => {
    const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await fetchAPI.json();
    console.log(response);
    setData(testData.results);
  };

  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  const handleInput = ({ target: { name, value } }) => {
    setFilters({ ...filters, [name]: value });
    console.log(filters);
  };

  const handleClick = () => {
    const { column, comparison, number } = filters;
    // const test = (parseInt(comparison, 10));
    // console.log(test);
    const filterData = data.filter((e) => {
      if (comparison === 'maior que') {
        console.log(typeof (Number(e[column])));
        return Number(e[column]) > Number(number);
      }
      if (comparison === 'menor que') {
        return Number(e[column]) < Number(number);
      }
      return Number(e[column]) === Number(number);
    });
    setData(filterData);
  };

  return (
    <TableContext.Provider
      value={ {
        data,
        setData,
        getPlanets,
        handleChange,
        filters,
        handleInput,
        handleClick,
      } }
    >
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableProvider;
