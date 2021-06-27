import React from 'react';

export function renderRemainingPlanets(planet, index) {
  const values = Object.values(planet);
  return (
    <tbody key={ index }>
      <tr>
        {
          values.map((planetValue, valueIndex) => (
            <td key={ valueIndex }>
              { planetValue }
            </td>))
        }
      </tr>
    </tbody>
  );
}

export function renderPlanetHeaders(planet, index) {
  delete planet.residents;
  const headers = Object.keys(planet);
  if (index === 0) {
    return (
      <thead key={ index }>
        <tr>
          { headers.map((header, headerIndex) => (
            <th key={ headerIndex }>
              { header }
            </th>)) }
        </tr>
      </thead>
    );
  } return null;
}

export function filterPlanetsByColumn(planet, filter) {
  const selectedColumn = parseInt(planet[filter.column], 10);
  const inputedValue = parseInt(filter.value, 10);

  switch (filter.comparison) {
  case 'maior que':
    return selectedColumn > inputedValue;
  case 'menor que':
    return selectedColumn < inputedValue;
  case 'igual a':
    return selectedColumn === inputedValue;
  default:
    return null;
  }
}

export function filterByColuna(planet, filters) {
  return filters.filterByNumericValues
    .every((filter) => filterPlanetsByColumn(planet, filter));
}

export function filteringAndMappingData(data, filters) {
  return data
    .filter((planet) => planet.name.includes(filters.filterByName.name))
    .filter((planet) => filterByColuna(planet, filters))
    .map((planet, index) => renderRemainingPlanets(planet, index));
}

export function mappingHeaders(data) {
  return data.map((planet, index) => renderPlanetHeaders(planet, index));
}
