import React, { useContext } from 'react';
import MyContext from './MyContext';

function Input() {
  const { setFilterApi } = useContext(MyContext);
  return (
    <label htmlFor="planet-filter">
      Filtro de Planetas:
      <input
        data-testid="name-filter"
        id="planet-filter"
        type="text"
        onChange={ (event) => { setFilterApi(event.target.value); } }
      />
    </label>
  );
}

export default Input;
