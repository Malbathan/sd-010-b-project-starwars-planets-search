import React, { useContext } from 'react';
import { SWContext } from '../context/SWContext';

export default function Filter() {
  const { setFilteredName } = useContext(SWContext);
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
