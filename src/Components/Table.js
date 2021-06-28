import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

const Table = () => {
  const value = useContext(PlanetsContext);
  console.log(value);
  return (
    <table>
      {value.map((planet) => {
        delete planet.residents;
        // Source: https://www.w3schools.com/howto/howto_js_remove_property_object.asp
        const planetsArray = Object.values(planet);
        return (<tr>
          {planetsArray.map((obj) => (
            <td>{obj}</td>
          ))}
                </tr>);
      })}
    </table>
  );
};

export default Table;
