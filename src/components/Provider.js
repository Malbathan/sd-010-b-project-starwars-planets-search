import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchApiStarwars from '../services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState([{}]);
  const [fetching, setFetching] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '',
      },
    ],
  });

    const fetchApi = async () => {
      const response = await  fetchApiStarwars();
      setData(response)
    }

  useEffect(() => {
    // const fetchApiStarwars = () => {
    //   fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    //     .then((response) => response.json())
    //     .then(({ results }) => setData(results));
    // };
    const fetchApi = async () => {
      const response = await  fetchApiStarwars();
      setData(response)
    }

    fetchApi();
  }, [fetching]);

  // const addNewFilter = () => {
  //   if (filters.filterByName.name !== '') {
  //    const filter = filters.filterByName.name
  //    setData(data.filter(({ name }) => name.includes(filter)))  
  //   }
  // }

  // useEffect(() => {
  //   if (filters.filterByName.name !== '') {
  //     addNewFilter(filters.filterByName.name)
  //   }
  // }, [filters.filterByName.name, addNewFilter])
  
  const newFilter = (value ) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value
      }
    })
  }


  const contextValue = {
    data,
    setData,
    fetching,
    setFetching,
    filters,
    setFilters,
    newFilter,
    fetchApi,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
