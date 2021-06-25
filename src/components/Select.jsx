import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SelectForm() {
  const { filters, setFilter, data } = useContext(PlanetsContext);

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);

  const selectOptions = () => {
    if (data.length) {
      const options = Object.keys(data[0]).filter((key) => key !== 'name');
      return options;
    }
  };

  return (
    <form>
      <label htmlFor="column">
        <select
          data-testid="column-filter"
          id="column"
          name="column"
          onChange={ (event) => setColumn(event.target.value) }
        >
          { selectOptions() ? selectOptions().map((option, index) => (
            <option key={ index }>{option}</option>)) : null }
        </select>
      </label>

      <label htmlFor="comparison">
        <select
          id="comparison"
          name="comparison"
          data-testid="comparison-filter"
          onChange={ (event) => setComparison(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value">
        <input
          data-testid="value-filter"
          name="value"
          type="number"
          onChange={ (event) => setValue(event.target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => (
          setFilter({ ...filters,
            filterByNumericValues: [{ column, comparison, value }],
          })) }
      >
        Enviar
      </button>
    </form>

  );
}

export default SelectForm;
