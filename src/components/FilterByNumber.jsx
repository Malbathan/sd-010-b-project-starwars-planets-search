import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = ['maior que', 'menor que', 'igual a'];

export default function FilterByNumber() {
  const { filters, setFilters, setPlanetsByValue, data } = useContext(StarwarsContext);

  const option = (val, i) => (
    <option
      key={ i }
      value={ val }
    >
      { val }
    </option>
  );

  const handleChange = ({ target: { name, value } }) => {
    setFilters((prevState) => ({ // prevState idea from https://github.com/tryber/sd-010-b-project-starwars-planets-search/blob/flavio-andrade-project-starwars-planets-serch/src/components/Filtered.jsx
      ...prevState,
      filterByNumericValues: [{
        ...prevState.filterByNumericValues[0],
        [name]: value,
      }],
    }));
  };

  // filter functions source: https://github.com/tryber/sd-010-b-project-starwars-planets-search/blob/flavio-andrade-project-starwars-planets-serch/src/components/Filtered.jsx
  const bigger = (column, value) => data.filter((planet) => (
    planet[column] > parseInt(value, 10)
  ));
  const equals = (column, value) => data.filter((planet) => (
    planet[column] === value
  ));
  const smaller = (column, value) => data.filter((planet) => (
    planet[column] < parseInt(value, 10)
  ));

  const filterByValue = () => {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    switch (comparison) {
    case 'maior que':
      return setPlanetsByValue(bigger(column, value));
    case 'menor que':
      return setPlanetsByValue(smaller(column, value));
    case 'igual a':
      return setPlanetsByValue(equals(column, value));
    default:
      return [];
    }
  };

  return (
    <>
      <label htmlFor="column">
        Column:
        <select
          name="column"
          id="column"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          { columns.map((op, i) => option(op, i)) }
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison:
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          { comparisons.map((op, i) => option(op, i)) }
        </select>
      </label>
      <label htmlFor="value">
        Value:
        <input
          type="number"
          name="value"
          id="value"
          data-testid="value-filter"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => { filterByValue(); } }
      >
        Filter
      </button>
    </>
  );
}
