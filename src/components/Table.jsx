import React, { useContext } from 'react';

import DataContext from '../context/DataContext';

function Table() {
  const { tableHead, data } = useContext(DataContext);

  function TableInfo() {
    if (data) {
      return (
        data.map(({
          name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        }, index) => (
          <tr key={ index }>
            <td>{ name }</td>
            <td>{ rotationPeriod }</td>
            <td>{ orbitalPeriod }</td>
            <td>{ diameter }</td>
            <td>{ climate }</td>
            <td>{ gravity }</td>
            <td>{ terrain }</td>
            <td>{ surfaceWater }</td>
            <td>{ population }</td>
            <td>{ films }</td>
            <td>{ created }</td>
            <td>{ edited }</td>
            <td>{ url }</td>
          </tr>
        ))
      );
    }
  }

  return (
    <section>
      <table>
        <tr>
          {
            tableHead.filter((item) => item !== 'residents').map((head, index) => (
              <th key={ index }>{head}</th>
            ))
          }
        </tr>
        {TableInfo()}
      </table>
    </section>
  );
}

export default Table;
