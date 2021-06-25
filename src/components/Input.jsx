import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Input() {
  const { filters, setFilter } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    setFilter({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  };

  return (
    <label htmlFor="planet-name">
      Name:
      <input data-testid="name-filter" onChange={ (event) => handleChange(event) } />
    </label>
  );
}

export default Input;
