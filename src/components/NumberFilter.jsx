import React, { useContext } from 'react';
import Context from '../context/Context';

function NumberFilter() {
  const {
    numericFilter,
    setNumericFilter,
    nameFilter,
    setNameFilter,
  } = useContext(Context);

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilter({
      ...numericFilter,
      [name]: value,
    });
    console.log(numericFilter);
  };

  const handleClick = () => {
    console.log('oieee');
    setNameFilter({
      ...nameFilter,
      filterByNumericValues: [
        ...nameFilter.filterByNumericValues,
        numericFilter,
      ],
    });
    console.log(nameFilter);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        <option
          value="population"
        >
          population
        </option>
        <option
          value="orbital_period"
        >
          orbital_period
        </option>
        <option
          value="diameter"
        >
          diameter
        </option>
        <option
          value="rotation_period"
        >
          rotation_period
        </option>
        <option
          value="surface_water"
        >
          surface_water
        </option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        <option
          value="maior que"
        >
          maior que
        </option>
        <option
          value="menor que"
        >
          menor que
        </option>
        <option
          value="igual a"
        >
          igual a
        </option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ handleChange }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Aplicar filtro
      </button>
    </div>
  );
}

export default NumberFilter;
