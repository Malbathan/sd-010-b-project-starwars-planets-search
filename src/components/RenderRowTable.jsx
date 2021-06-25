import { useContext } from 'react';
import StarWarsContext from '../hooks/StarWarsContext';

export default function RenderRowTable(results = []) {
  const UM_NEGATIVE = -1;
  const { filters: { filterByName } } = useContext(StarWarsContext);

  const resultsFilter = results.filter((planeta) => planeta
    .name.indexOf(filterByName) !== UM_NEGATIVE);

  return resultsFilter;
}
