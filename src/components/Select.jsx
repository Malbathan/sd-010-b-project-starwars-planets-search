import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SelectForm() {
  const { filters, setFilter, data } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  const [column, setColumn] = useState('rotation_period');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const selectOptions = (coluna) => {
      if (data.length) {
        if (filterByNumericValues.length !== 0) {
          const newOptions = options.filter((key) => key !== 'name' && key !== coluna);
          setColumn(newOptions[0]);
          setOptions(newOptions);
        } else {
          const filterOptions = Object.keys(data[0]).filter((key) => key !== 'name');
          setOptions(filterOptions);
        }
      }
    };
    selectOptions(column);
  }, [data, filterByNumericValues]);

  const setFilterByNumericValues = () => {
    setFilter({ ...filters,
      filterByNumericValues: [...filterByNumericValues, { column, comparison, value }],
    });
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
          { options.map((option, index) => (
            <option value={ option } key={ index }>{option}</option>)) }
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
        onClick={ () => setFilterByNumericValues() }
      >
        Enviar
      </button>
    </form>

  );
}

export default SelectForm;
