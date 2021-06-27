import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

import Options from '../services/helpers';

function Provider({ children }) {
  const [Planet, setInput] = useState('');
  const [responseAPI, setResponseAPI] = useState([]);
  const [del, setDel] = useState({ alvo: '', coluna: '' });
  const [options, setOptions] = useState(Options);
  const [aux, setAux] = useState([]);
  const [filters, setFilters] = useState({
    number: 0,
    column: 'population',
    comparison: 'maior que',
  });
  // console.log(options);

  // useEffect(() => {
  //   const { alvo } = del;
  //   console.log(alvo);
  //   const optionFilter = options.filter((cur) => alvo !== cur);
  //   setOptions(optionFilter);
  // }, [del, options]);

  const fetchAPI = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    setResponseAPI(responseJson.results);
    setAux(responseJson.results);
  };
  // console.log(responseAPI);

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleChangePlanet = (event) => {
    setInput(event.target.value);
  };

  const colum = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
    setDel({ alvo: value });
  };

  const changefilteredByNumber = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
    // console.log(value);
  };

  const handleButtonFilterClick = () => {
    const { number, column, comparison } = filters;
    console.log(aux);

    const filteredData = aux.filter((planet) => {
      if (comparison === 'maior que') {
        return parseInt(planet[column], 10) > parseInt(number, 10);
      }

      if (comparison === 'menor que') {
        return parseInt(planet[column], 10) < parseInt(number, 10);
      }

      return parseInt(planet[column], 10) === parseInt(number, 10);
    });
    console.log(aux);
    setResponseAPI(filteredData);
    const { alvo } = del;
    const optionFilter = options.filter((cur) => alvo !== cur);
    setOptions(optionFilter);
  };

  const GLOBAL_STATE = {
    responseAPI,
    handleChangePlanet,
    changefilteredByNumber,
    colum,
    handleButtonFilterClick,
    del,
    options,
    filters: {
      filterByName: {
        name: Planet,
      },
      filterByNumericValues: [
        {
          column: filters.column,
          comparison: filters.comparison,
          value: filters.number,
        },
      ],
    },
  };

  return (
    <div>
      <context.Provider value={ GLOBAL_STATE }>
        {children}
      </context.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
