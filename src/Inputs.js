import React, { useContext } from 'react';
import planetsContext from './context/Context';

function Inputs() {
  const {
    filterName,
    inputOptions,
    optionsFilter,
    inputOptionsFilter,
  } = useContext(planetsContext);
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
      <div>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ optionsFilter }
        >
          {inputOptions.map((element) => <option key={ element }>{element}</option>)}
        </select>
      </div>
      <div>
        <select
          data-testid="comparison-filter"
          name="comparsion"
          onChange={ optionsFilter }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </div>
      <div>
        <input
          data-testid="value-filter"
          type="number"
          name="number"
          onChange={ optionsFilter }
        />
      </div>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ inputOptionsFilter }
      >
        filtrar
      </button>
    </div>
  );
}

export default Inputs;
