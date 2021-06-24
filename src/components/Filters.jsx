import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { setFilter } = useContext(StarWarsContext);
  const handleChange = ({ target }) => {
    setFilter({ name: target.value });
  };

  const renderNameFilter = () => (
    <div>
      <label htmlFor="name">
        <input
          data-testid="name-filter"
          type="text"
          id="name"
          onChange={ handleChange }
        />
      </label>
    </div>
  );

  return (
    <section>
      <h1>Olá guerra de estrelas</h1>
      {renderNameFilter()}
    </section>
  );
}

export default Filters;
