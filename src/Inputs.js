import React, { useContext } from 'react';
import planetsContext from './context/Context';

function Inputs() {
  const { filterName } = useContext(planetsContext);
  return (
    <div>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          onChange={ filterName }
        />
      </div>
    </div>
  );
}

export default Inputs;
