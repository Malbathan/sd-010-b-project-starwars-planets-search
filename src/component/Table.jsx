import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  const { data } = props;
  if (data.length === 0) {
    return <h1>Carregando...</h1>;
  }
  const headTable = Object.keys(data[0]);
  return (
    <table>
      <thead>
        <tr>
          {
            headTable.map((item) => {
              if (item === 'url') {
                return null;
                // delete(item);
              }
              return (
                <th style={ { border: 'solid 1px black' } } key={ item }>{item}</th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => (
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

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
