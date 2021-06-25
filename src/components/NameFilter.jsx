import React, { useContext } from 'react';
import Context from '../context/Context';

function NameFilter() {
  const { nameFilter, setNameFilter } = useContext(Context);

  const handleChange = ({ target: { value } }) => {
    setNameFilter({
      ...nameFilter,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <header>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
        placeholder="digite o nome do filme"
      />
    </header>
  );
}

export default NameFilter;
