import React, { useState, useContext, useEffect } from 'react';

import PlanetsContext from '../../context/PlanetsContext';
import initialBodyToRender from '../../services/tableBodyInitialState';

function TableBody() {
  const [bodyToRender, setBodyToRender] = useState(initialBodyToRender);
  const { data } = useContext(PlanetsContext);

  const createTableData = (planetInfo) => {
    if (typeof planetInfo === 'object') {
      return (
        <td key={ planetInfo }>
          {
            planetInfo.map((info) => (
              <li key={ info }>
                { info }
              </li>
            ))
          }
        </td>
      );
    }
    return (
      <td key={ planetInfo }>
        { planetInfo }
      </td>
    );
  };

  useEffect(() => {
    const createTableRow = (planet) => {
      const planetAsArray = Object.values(planet);
      return (
        <tr key={ planet.name }>
          {
            planetAsArray.map((planetInfo) => createTableData(planetInfo))
          }
        </tr>
      );
    };
    setBodyToRender(data.map((planet) => createTableRow(planet)));
  }, [data]);

  return bodyToRender;
}

export default TableBody;
