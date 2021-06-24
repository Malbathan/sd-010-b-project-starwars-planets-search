import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputsSearch() {
  const { setFilters, filters } = useContext(StarWarsContext);

  const searchByText = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
    // setFilterByName({ name: value.toLowerCase() });
  };

  return (
    <section>
      <input
        value={ filters.filterByName.name }
        onChange={ searchByText }
        data-testid="name-filter"
      />
    </section>
  );
}

export default InputsSearch;
