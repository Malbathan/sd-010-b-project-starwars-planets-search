import React from 'react';
import PropTypes from 'prop-types';

function TableBody({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <>
      {data.map((row) => (
        <tr key={ row.name }>
          {columns
            .filter((header) => header !== 'residents')
            .map((column) => (
              <td
                key={ column }
                name={ column }
                data-testid={ `planet-${column}` }
              >
                { row[column] }
              </td>))}
        </tr>
      ))}
    </>
  );
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default TableBody;
