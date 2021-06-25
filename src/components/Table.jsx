import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const {
    planetsList,
    fetching,
    fetchPlanets,
    headersList,
  } = useContext(Context);

  useEffect(
    fetchPlanets(), [],
  );

  // const table = (
  //   <table>
  //     <thead>
  //       <tr>
  //         {headersList.map((header, index) => <th key={ index }>{ header }</th>)}
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {planetsList.map((planet, index) => (<td key={ index }>{planet}</td>))}
  //     </tbody>
  //   </table>
  // );

  // if (fetching) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headersList.map((header, index) => <th key={ index }>{ header }</th>)}
          </tr>
        </thead>
        <tbody>
          {/* {planetsList.map((planet, index) => (<td key={ index }>{planet}</td>))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
