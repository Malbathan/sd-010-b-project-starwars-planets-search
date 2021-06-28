import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const {
    setName, columnOptions, setCollums, setComparison, setValue, search, deletResetFilter,
  } = useContext(PlanetContext);

  return (
    <form className="form-filter">
      <input
        type="text"
        name="input-filter"
        placeholder="Pesquisar"
        data-testid="name-filter"
        onChange={ (e) => setName(e.target.value) }
      />
      {/* setCollums */}
      <div data-testid="filter">
        <select
          name="select-setCollums"
          data-testid="column-filter"
          onChange={ (e) => setCollums(e.target.value) }
        >
          {
            columnOptions.map((column, index) => (
              <option key={ index } value={ `${column}` }>
                {column}
              </option>
            ))
          }
        </select>
        <button type="button" onClick={ deletResetFilter }>
          X
        </button>
      </div>
      {/* setComparison */}
      <div data-testid="filter">
        <select
          name="select-setComparison"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <button type="button" onClick={ deletResetFilter }>
          X
        </button>
      </div>
      {/* setNumbers */}
      <div data-testid="filter">
        <input
          type="number"
          name="value"
          placeholder="Apenas número"
          data-testid="value-filter"
          onChange={ (e) => setValue(e.target.value) }
        />
        <button type="button" onClick={ deletResetFilter }>
          X
        </button>
      </div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ search }
      >
        Buscar
      </button>
    </form>
  );
}

export default Filter;
