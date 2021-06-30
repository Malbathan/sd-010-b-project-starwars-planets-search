import { useContext } from 'react';
import StarWarsContext from '../contex/StarWarsContext';

const { filters } = useContext(StarWarsContext);
const { order } = filters;

export default function sortNameHelper(variableSearch) {
  const negative = -1;

  if (order.sort === 'ASC' && order.column === 'name') {
    variableSearch.sort((a, b) => {
      if (b.name < a.name) return negative;
      if (b.name > a.name) return 1;
      return 0;
    });
  } else {
    variableSearch.sort((a, b) => {
      if (a.name < b.name) return negative;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  // if (order.sort === 'ASC') {
  //   variableSearch.sort((a, b) => a[order.column] - b[order.column]);
  // } else {
  //   variableSearch.sort((a, b) => b[order.column] - a[order.column]);
  // }
}
