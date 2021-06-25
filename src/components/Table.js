import React from 'react';
import RequisitionAPI from '../api/RequisitionAPI';

function Table() {
  const { results } = RequisitionAPI();

  function render() {
    return (
      // results.map((cur) => (
      //   <p key={ cur.name }>{ cur.name }</p>
      // ))
      console.log(results)
    );
  }
  const THREE_SECONDS = 3000;

  return (
    <div>
      {setTimeout(render, THREE_SECONDS)}
    </div>
  );
}

export default Table;
