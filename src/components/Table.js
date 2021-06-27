import React, { useContext } from 'react';
import ContextStarWars from '../context/ContextStarWars';

function Table() {
  const { dataFilted, data } = useContext(ContextStarWars);

  let arrayHeaders = null;

  if (data[0]) {
    arrayHeaders = Object.keys(data[0]);
  }

  const getTableHead = () => {
    let tableHeaders;
    if (arrayHeaders) {
      tableHeaders = arrayHeaders.map((header) => <th key={ header }>{header}</th>);
    }
    return tableHeaders;
  };

  const getdata = () => dataFilted.map((obj) => (
    <tr key={ obj.name }>
      {arrayHeaders.map((key) => <td key={ key }>{obj[key]}</td>)}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          {getTableHead()}
        </tr>
      </thead>
      <tbody>
        {getdata()}
      </tbody>
    </table>
  );
}

export default Table;
