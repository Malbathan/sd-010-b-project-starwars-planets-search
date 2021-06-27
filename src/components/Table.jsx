import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { ByName, byNumeric } from '../services/Filters';

function Table() {
  const {
    data: { results },
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
  } = useContext(PlanetsContext);
  if (!results) return <div>loading</div>;
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(results[0]).map((key) => (
            <th key={ key }>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {byNumeric(ByName(results, name), filterByNumericValues).map(
          (planet, i) => (
            <tr key={ i }>
              {Object.values(planet).map((value) => (
                <td key={ value }>{value}</td>
              ))}
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

export default Table;
