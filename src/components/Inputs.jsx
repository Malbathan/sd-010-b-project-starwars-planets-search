import React, { useContext } from 'react';
import store from '../context/store';

export default function Inputs() {
  const { handleChange } = useContext(store);

  const renderNameInput = () => (
    <div>
      <input
        name="name"
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ handleChange }
      />
    </div>
  );

  return (
    renderNameInput()
  );
}
