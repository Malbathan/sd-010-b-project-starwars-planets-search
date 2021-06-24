import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  // if (Object.keys(data).length > 0) {
  //   const dataFiltered = data.filter(
  //     (planet) => planet.name.includes(filters.filters.filterByName.name),
  //   );
  //   setData(dataFiltered);
  // }

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        setData,
        filters,
        setFilters,
        dataFiltered,
        setDataFiltered } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default StarWarsProvider;
