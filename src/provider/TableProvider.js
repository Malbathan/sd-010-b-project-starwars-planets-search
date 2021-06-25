import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from '../context/TableContext';
import fetchApi from '../services';

function TableProvider({ children }) {
  // const [planetsFilters, setPlanetsFilters] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsResult = await fetchApi();
      setData(planetsResult);
    };
    fetchPlanets();
  }, []);

  const filterPlanet = () => {
    const { column, comparison, value } = filters.filterByNumericValues;
    switch (comparison) {
    case 'maior que':
      return setData(data.filter((planet) => planet[column] > Number(value)));
    case 'menor que':
      return setData(data.filter((planet) => planet[column] < Number(value)));
    case 'igual a':
      return setData(data.filter((planet) => Number(planet[column]) === Number(value)));

    default:
      return data;
    }
  };

  const context = {
    data, setData, filters, setFilters, filterPlanet };

  return (
    <TableContext.Provider value={ context }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = ({
  children: PropTypes.func,
}).isRequired;

export default TableProvider;
