import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

function Inputs() {
  const { setName } = useContext(StarWarsContext);
  return (
    <form>
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          placeholder="digite o nome do planeta"
          onChange={ ({ target: { value } }) => setName({
            filters: {
              filterByName: {
                name: value,
              },
            },
          }) }
        />
      </label>
    </form>
  );
}

export default Inputs;
