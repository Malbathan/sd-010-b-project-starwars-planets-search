import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByName(data) {
  const { filters } = useContext(PlanetsContext);
  const { filterByName } = filters;
  const { name } = filterByName;
  return data.filter((planet) => planet.name.toLowerCase().includes(name));
}

export default FilterByName;
