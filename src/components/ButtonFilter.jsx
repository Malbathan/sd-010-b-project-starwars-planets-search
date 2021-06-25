import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

function ButtonFilter() {
  const { setIsFiltered } = useContext(StarWarsContext);
  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ () => setIsFiltered(true) }
    >
      Filtrar
    </button>
  );
}

export default ButtonFilter;
