import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilterByName(data) {
  const { filters } = useContext(PlanetsContext);
  const { filterByName } = filters;
  const { name } = filterByName;
  return data.filter((planet) => planet.name.toLowerCase().includes(name));
}

export function FilterByNumericValues(data) {
  const { filters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterByNumericValues;
  return data.filter((planet) => planet.column);
}
