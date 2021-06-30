import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);

  /* const {
    multipleFilters: { filters: { filterByName: { name } } },
  } = useContext(PlanetsContext); */
  const { multipleFilters } = useContext(PlanetsContext);

  if (data.length === 0) {
    return <h1>Carregando...</h1>;
  }

  // delete data[0].residents;

  /*
  (Pluralsight Guide)
  ref: https://www.pluralsight.com/guides/dynamic-tables-from-editable-columns-in-react-html
  */

  const headTable = Object.keys(data[0]);
  return (
    <table>
      <thead>
        <tr>
          {
            /*
            Love2dev
            ref: https://love2dev.com/blog/javascript-remove-from-array/
            */

            // headTable.map((item) => {
            //   if (item === 'url') {
            //     return null;
            //     // delete(item);
            //   }
            //   return (
            //     <th style={ { border: 'solid 1px black' } } key={ item }>{ item }</th>
            //   );
            // })
            headTable.filter((item) => item !== 'url').map((item) => (
              <th style={ { border: 'solid 1px black' } } key={ item }>{ item }</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.filter((item) => item.name.includes(multipleFilters.filterByName.name))
            .map((item) => (
              <tr key={ item.name }>
                <td>{ item.name }</td>
                <td>{ item.rotation_period }</td>
                <td>{ item.orbital_period }</td>
                <td>{ item.diameter }</td>
                <td>{ item.climate }</td>
                <td>{ item.gravity }</td>
                <td>{ item.terrain }</td>
                <td>{ item.surface_water }</td>
                <td>{ item.population }</td>
                <td>{ item.residents }</td>
                <td>{ item.films }</td>
                <td>{ item.created }</td>
                <td>{ item.edited }</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}

export default Table;
