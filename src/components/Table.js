import React, { useContext } from 'react';
import AppContext from '../contextApi/Context';

function Table() {
  const { listOfContext: { state: { data } } } = useContext(AppContext);
  console.log(data);

  if (data) {
    return (
      <div>
        <table>
          { data.map((curr) => (
            <tr key={ String(curr.diameter) }>
              <td key={ curr.name }>{ curr.name }</td>
              <td key={ curr.climate }>{ curr.climate }</td>
              <td key={ curr.created }>{ curr.created }</td>
              <td key={ curr.diameter }>{ curr.diameter }</td>
              <td key={ curr.edited }>{ curr.edited }</td>
              <td key={ curr.films }>{ curr.films }</td>
              <td key={ curr.gravity }>{ curr.gravity }</td>
              <td key={ curr.orbital_period }>{ curr.orbital_period }</td>
              <td key={ curr.population }>{ curr.population }</td>
              <td key={ curr.rotation_period }>{ curr.rotation_period }</td>
              <td key={ curr.surface_water }>{ curr.surface_water }</td>
              <td key={ curr.terrain }>{ curr.terrain }</td>
              <td key={ curr.url }>{ curr.url }</td>
            </tr>
          )) }
        </table>
      </div>
    );
  }

  return (
    <div>
      Carregando...
    </div>
  );
}

export default Table;
