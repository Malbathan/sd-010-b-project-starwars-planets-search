import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SelectForm() {
  const { filters, setFilter, data } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    setFilter({
      ...filters,
      filterByNumericValues: [{
        [target.name]: target.value,
      }],
    });
  };

  return (
    <form>
      <label htmlFor="column">
        <select
          data-testid="column-filter"
          id="column"
          name="column"
          onChange={ (event) => handleChange(event) }
        >
          { data.length
            ? Object.keys(data[0]).map((key, index) => (
              <option key={ index }>{key}</option>))
            : null }
        </select>
      </label>

      <label htmlFor="comparison">
        <select id="comparison" data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value">
        <input data-testid="value-filter" type="number" />
      </label>

      <button type="button" data-testid="button-filter">Enviar</button>
    </form>

  );
}

export default SelectForm;
