import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/fetchPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [head, setHead] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    column: '',
    comparison: '',
    value: 0,
  });
  const [columns, setColumns] = useState([
    { population: 'population' },
    { orbital_period: 'orbital_period' },
    { diameter: 'diameter' },
    { rotation_period: 'rotation_period' },
    { surface_water: 'surface_water' },
  ]);

  useEffect(() => {
    const getPlanets = async () => {
      const request = await fetchPlanets();
      setData(request);
      setSearch(request);
      setHead((Object.keys(request[0]))
        .filter((item) => item !== 'residents')
        .map((item) => item));
    };
    getPlanets();
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filterByParameters = () => {
    const { column, comparison, value } = filters;
    let turn = data;
    switch (comparison) {
    case 'maior que':
      turn = data.filter((item) => item[column] > Number(value));
      break;
    case 'menor que':
      turn = data.filter((item) => item[column] < Number(value));
      break;
    case 'igual a':
      turn = data.filter((item) => item[column] === value);
      break;
    default:
      turn = data;
      break;
    }
    setSearch(turn);
  };

  const filter = (id) => {
    const { column } = filters;
    setColumns((item) => item.filter((q) => q[column] === id));
  };

  const context = {
    filter,
    columns,
    search,
    data,
    head,
    filters,
    handleChange,
    filterByParameters,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
