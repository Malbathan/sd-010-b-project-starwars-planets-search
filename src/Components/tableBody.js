import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

export function useFilter() {
  const [filter, setFilter] = useContext(SWContext);
  console.log(filter);
  console.log(setFilter);
}

// a partir do array filtrado da api, constroi o corpo da tabela
const renderTB = (frstElemnt, arrayOfPlanetsData) => {
  if (frstElemnt) {
    const fillTable = arrayOfPlanetsData
      .map((el) => Object.values(el))
      .map((array, i) => (
        <tr key={ i }>
          { array
            .map((el, index) => <td key={ index }>{el}</td>) }
        </tr>));
    return fillTable;
  }
};

export default renderTB;
