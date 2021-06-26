import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsAPI from '../services/planetsAPI';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  });

  const dataAPI = async () => {
    const response = await fetchPlanetsAPI();
    setData(response.results);
  };

  useEffect(() => {
    dataAPI();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleChangeFilter = ({ target: { name, value } }) => {
    setfilterByNumericValues({ ...filterByNumericValues, [name]: value });
  };

  function onClick() {
    const { column, comparison, value } = filterByNumericValues;
    const filtered = data.filter((item) => {
      switch (comparison) {
      case 'maior que':
        return Number(item[column]) > Number(value);
      case 'menor que':
        return Number(item[column]) < Number(value);
      default:
        return Number(item[column]) === Number(value);
      }
    });
    return setData(filtered);
  }

  return (
    <PlanetContext.Provider
      value={ {
        data,
        filterByNumericValues,
        search,
        handleChange,
        handleChangeFilter,
        onClick,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = ({
  children: PropTypes.shape().isRequired,
});

export default PlanetProvider;
