import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [range, setRange] = useState({
    status: 'population',
    operator: 'maior que',
    value: '0',
  });
  const [select] = useState(['maior que', 'menor que', 'igual a']);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((api) => api.json());
      // console.log(results);
      setData(results);
    };
    getPlanets();
  }, []);

  const filterName = ({ value }) => {
    setFilter({ ...filter, filters: { filterByName: { name: value } } });
  };

  const selectComp = ({ name, value }) => {
    setRange({ ...range, [name]: value });
    console.log(range);
  };

  const contextValue = {
    data,
    column,
    setColumn,
    range,
    setRange,
    select,
    filter,
    filterName,
    selectComp,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
