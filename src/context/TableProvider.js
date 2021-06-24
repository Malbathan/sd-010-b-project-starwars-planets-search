import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const getPlanets = async () => {
    const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await fetchAPI.json();
    setData(response.results);
  };

  const handleChange = ({ target }) => {
    setFilters(target.value);
  };

  return (
    <TableContext.Provider value={ { data, setData, getPlanets, handleChange, filters } }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableProvider;
