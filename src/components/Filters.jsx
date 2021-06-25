/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { DataContext } from '../context/PlanetsContext';

export default function Filters() {
  const { setFilteredName } = React.useContext(DataContext);
  function handleNameChange(e) {
    const { value } = e.target;
    setFilteredName(value);
  }
  return (
    <div>
      <input
        type="text"
        onChange={ handleNameChange }
        placeholder="Filtre por nome do planeta"
        data-testid="name-filter"
      />
    </div>
  );
}
