import { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const useFilters = () => {
  const [newData, setNewData] = useState([]);
  const { filters, data } = useContext(PlanetsContext);
  const { filterByName, filterByNumericValues } = filters;
  const { name } = filterByName;

  useEffect(() => {
    const byName = () => {
      if (name) {
        setNewData(data.filter((planet) => planet.name.toLowerCase().includes(name)));
      }
    };
    byName();
  }, [data, name]);

  // Source https://github.com/tryber/sd-010-b-project-starwars-planets-search/tree/daniel-roberto-starwars
  useEffect(() => {
    if (filterByNumericValues.length) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        setNewData(newData.filter((planet) => {
          if (comparison === 'maior que') return Number(planet[column]) > Number(value);
          if (comparison === 'igual a') return Number(planet[column]) === Number(value);
          return Number(planet[column]) < Number(value);
        }));
      });
    }
  }, [data, filterByNumericValues]);

  useEffect(() => {
    if (!name && !filterByNumericValues.length) {
      setNewData(data);
    }
  }, [data, name, filterByNumericValues]);

  return [newData];
};

export default useFilters;
