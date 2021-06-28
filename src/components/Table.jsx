import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { ByName, byNumeric } from '../services/Filters';
import '../App.css';

function Table() {
  const {
    data: { results },
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
  } = useContext(PlanetsContext);
  if (!results) return <div className="loading">loading</div>;
  return (
    <table className="App-table">
      <thead className="table-head">
        <tr>
          {Object.keys(results[0]).map((key) => (
            <th key={ key }>{`${key.replace('_', ' ')}`}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
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
