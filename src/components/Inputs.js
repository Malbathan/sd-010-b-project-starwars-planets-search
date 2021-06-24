import React, { useContext, useState } from 'react';
import planetsContext from '../contextAPI/planetsContext';

function Inputs() {
  const { handleName } = useContext(planetsContext);
  const [moreOrLessFilter, setMoreOrLessFilter] = useState({
    columnHeader: 'population',
    operator: 'maior que',
    numberForComparison: 0,
  });

  const prepareMoreOrLessFilter = ({ name, value }) => {
    setMoreOrLessFilter({ ...moreOrLessFilter, [name]: value });
  };

  return (
    <header>
      <section>
        <input
          type="text"
          name="name"
          data-testid="name-filter"
          placeholder="Busque por nomes"
          onChange={ ({ target }) => handleName(target) }
        />
      </section>
      <section>
        <select
          data-testid="column-filter"
          name="columnHeader"
          onChange={ ({ target }) => prepareMoreOrLessFilter(target) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="operator"
          onChange={ ({ target }) => prepareMoreOrLessFilter(target) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          name="numberForComparison"
          data-testid="value-filter"
          onChange={ ({ target }) => prepareMoreOrLessFilter(target) }
        />
        <button type="button" data-testid="button-filter">Filtrar</button>
      </section>
    </header>
  );
}

export default Inputs;
