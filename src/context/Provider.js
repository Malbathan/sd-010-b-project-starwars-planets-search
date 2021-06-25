import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWars';
/* import API from '../service/API'; */

const AuthProvider = (props) => {
  const { children } = props;
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  });

  async function API() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

    const response = await fetch(url);
    const aux = await response.json();
    setData(aux.results);
  }

  useEffect(() => {
    API();
  }, []);

  function handleChange(e) {
    setSearchName(e.target.value);
  }

  function handleChangeFilter(e) {
    setFilterByNumericValues({
      ...filterByNumericValues,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick() {
    const { column, comparison, value } = filterByNumericValues;
    const newFilter = data.filter((item) => {
      if (comparison === 'maior que') {
        return parseInt(item[column], 10) > parseInt(value, 10);
      }
      if (comparison === 'menor que') {
        return parseInt(item[column], 10) < parseInt(value, 10);
      }
      return parseInt(item[column], 10) === parseInt(value, 10);
    });
    return setData(newFilter);
  }

  const aux = {
    data,
    searchName,
    handleChange,
    filterByNumericValues,
    handleClick,
    handleChangeFilter,
  };

  return (
    <StarWarsContext.Provider value={ aux }>
      {children}
    </StarWarsContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
