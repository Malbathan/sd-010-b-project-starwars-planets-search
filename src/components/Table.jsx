import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { filtered: items } = useContext(PlanetContext);
  if (items.length === 0) return (<div />);
  return (
    <table>
      <tr>{Object.keys(items[0]).map((headers, i) => <th key={ i }>{headers}</th>)}</tr>
      {items.map((item, i) => (
        <tr key={ i }>
          {
            Object.keys(item).map(
              (key, id) => (
                <td key={ id }>
                  { typeof item[key] === 'object' ? item[key].length : item[key]}
                </td>),
            )
          }
        </tr>))}
    </table>);
}

export default Table;
