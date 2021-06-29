import React, { useContext } from 'react';
import planContext from '../context/planContext';

function Filtered() {
  const {
    filterByName, data, filters, setFilter, setArrayFiltered,
  } = useContext(planContext);

  const beckupData = data;

  function handleChange({ target: { name, value } }) {
    setFilter((prevState) => ({ ...prevState,
      filterByNumericValues: [{
        ...prevState.filterByNumericValues[0], [name]: value,
      }] }));
  }

  const btnArrayFilters = () => {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    if (comparison === 'maior que') {
      const resultMaior = beckupData.filter((item) => (
        item[column] > parseInt(value, 10)
      ));
      return setArrayFiltered(resultMaior);
    }
    if (comparison === 'igual a') {
      const resultIgual = beckupData.filter((item) => (
        item[column] === value
      ));
      return setArrayFiltered(resultIgual);
    }
    if (comparison === 'menor que') {
      const resultMenor = beckupData.filter((item) => (
        item[column] < parseInt(value, 10)
      ));
      return setArrayFiltered(resultMenor);
    }
  };

  return (
    <div>
      <label htmlFor="fil">
        Planeta:
        {' '}
        <input
          type="text"
          id="fil"
          name="filterByName"
          data-testid="name-filter"
          onChange={ (e) => filterByName(e.target) }
        />
      </label>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ (e) => handleChange(e) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (e) => handleChange(e) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        name="value"
        type="number"
        onChange={ (e) => handleChange(e) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => btnArrayFilters() }
      >
        Numero
      </button>
    </div>
  );
}

export default Filtered;
