import React, { useContext } from 'react';
import TableContext from '../../context/TableContext';
import SelectHeader from './SelectHeader';

function Header() {
  const { setFilters, filters, filterPlanet } = useContext(TableContext);
  const filterName = ({ target: { value: name } }) => {
    setFilters({ ...filters, filterByName: { name } });
  };

  return (
    <div>
      <input data-testid="name-filter" type="text" onChange={ filterName } />
      <SelectHeader />
      <input
        type="number"
        data-testid="value-filter"
        id="value"
        onChange={ ({ target: { value } }) => setFilters({
          ...filters,
          filterByNumericValues: {
            ...filters.filterByNumericValues, value } }) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterPlanet }
      >
        Pesquisar

      </button>
    </div>
  );
}

export default Header;
