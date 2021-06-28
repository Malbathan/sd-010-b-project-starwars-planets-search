import { useContext } from 'react';
import StarWarsContext from '../hooks/StarWarsContext';

export default function RenderRowTable(results = [], numberFilter) {
  const UM_NEGATIVE = -1;
  const { filters: { filterByName,
    filterByNumericValues } } = useContext(StarWarsContext);

  let resultsFilter = results.filter((planeta) => planeta
    .name.indexOf(filterByName.name) !== UM_NEGATIVE);

  if (numberFilter) {
    const operador = (filterByNumericValues[0]
      .comparison[0]);
    resultsFilter = results
      .filter((column) => {
        if (operador === '>') {
          return column[filterByNumericValues[0]] > filterByNumericValues[0].value[0];
        }
        if (operador === '<') {
          return column[filterByNumericValues[0]] < filterByNumericValues[0].value[0];
        }
        if (operador === '===') {
          return column[filterByNumericValues[0]] === filterByNumericValues[0].value[0];
        }
        return results;
      });
  }

  return resultsFilter;
}
