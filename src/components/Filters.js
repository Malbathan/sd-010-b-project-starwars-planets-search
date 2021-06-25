import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';

export default function Filters() {
  return (
    <fieldset>
      <legend>Filtros</legend>
      <FilterByName />
      <FilterByNumericValues />
    </fieldset>
  );
}
