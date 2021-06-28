import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

function InputName() {
  const { setNamePlanet } = useContext(StarWarsContext);

  return (
    <label htmlFor="name">
      Planeta:
      <input
        type="text"
        id="name"
        data-testid="name-filter"
        placeholder="digite o nome do planeta"
        onChange={ ({ target: { value } }) => setNamePlanet({
          name: value,
        }) }
      />
    </label>
  );
}

export default InputName;
