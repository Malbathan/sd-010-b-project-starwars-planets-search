import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import requestAPI from '../services/requestAPI';
import TableContext from '../context/TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);
  // mudei esse estado para filters pois estava fazendo diferente do que pede no readme.
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValue: [],
  });
  const [update, setUptade] = useState(false);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await requestAPI();
      planets.results.forEach((planet) => {
        delete planet.residents;
      });

      setData(planets.results);
      setTitles(Object.keys(planets.results[0]));
    };
    getPlanets();
  }, []);

  // handleChange input planet name
  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  // o lint colocou esse useCallback toda vez que eu salvava o arquivo.
  // https://www.youtube.com/watch?v=jMWNNSx-mcU&ab_channel=Rocketseat
  const filteredPlanets = useCallback(() => {
    const { column, comparison, value } = filters.filterByNumericValue[0];

    const filterInAPI = data.filter((element) => {
      if (comparison === 'maior que') {
        return Number(element[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(element[column]) < Number(value);
      }
      return Number(element[column]) === Number(value);
    });
    setData(filterInAPI);
  }, [data, filters]);

  // https://stackoverflow.com/questions/53255951/equivalent-to-componentdidupdate-using-react-hooks
  useEffect(() => {
    if (update === true) {
      filteredPlanets();
    }
    setUptade(false);
  }, [filteredPlanets, update]);
  // o lint também colocou esse filteredPlanet dentro do array de dependências

  const handleClick = (state) => {
    setFilters(
      { ...filters, filterByNumericValue: [...filters.filterByNumericValue, state] },
    );
    setUptade(true);
  };

  const myContext = {
    data,
    titles,
    filters,
    handleChange,
    handleClick,
  };

  return (
    <TableContext.Provider value={ myContext }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TableProvider;
