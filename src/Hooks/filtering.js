import { useState, useEffect, useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

const useFiltering = () => {
  const { data, filters } = useContext(StarWarsContext);
  const [filtered, setFiltered] = useState(data);

  const applyFilters = () => {
    const { name } = filters.filterByName;
    const filteredByName = (name !== '')
      ? data.filter((planet) => (planet.name).toLowerCase().includes(name))
      : data;
    if (filters.filterByNumericValues !== undefined) {
      const { column } = filters.filterByNumericValues[0];
      const { comparison } = filters.filterByNumericValues[0];
      const { value } = filters.filterByNumericValues[0];
      const filteredByValue = (value !== 0 && column !== '' && comparison !== '')
        ? filteredByName.filter((planet) => {
          if (comparison === 'maior que') {
            return parseFloat(planet[column])
            > parseFloat(value);
          }
          if (comparison === 'igual a') {
            return parseFloat(planet[column]) === parseFloat(value);
          }
          return parseFloat(planet[column]) < parseFloat(value);
        })
        : filteredByName;
      setFiltered(filteredByValue);
    }
  };

  useEffect(applyFilters, [data, filters.filterByNumericValues, filters.filterByName]);

  return filtered;
};

export default useFiltering;
