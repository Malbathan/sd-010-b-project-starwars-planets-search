import React from 'react';

function RenderTableByName(param) {
  if (param) {
    return (
      param.map((curr) => (
        <tr key={ curr.diameter }>
          <td>{ curr.name }</td>
          <td>{ curr.climate }</td>
          <td>{ curr.created }</td>
          <td>{ curr.diameter }</td>
          <td>{ curr.edited }</td>
          <td>{ curr.films }</td>
          <td>{ curr.gravity }</td>
          <td>{ curr.orbital_period }</td>
          <td>{ curr.population }</td>
          <td>{ curr.rotation_period }</td>
          <td>{ curr.surface_water }</td>
          <td>{ curr.terrain }</td>
          <td>{ curr.url }</td>
        </tr>
      ))
    );
  }
}

export default RenderTableByName;
