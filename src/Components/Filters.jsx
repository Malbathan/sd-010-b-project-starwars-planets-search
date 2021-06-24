import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const filterContext = createContext();

function Filters({ children }) {
  const filterByName = {
    filterByName: '',
  };

  const [filters, setFilters] = useState(filterByName);

  const onChangeName = ({ target }) => (
    setFilters({ ...filters, filterByName: target.value })
  );
  return (
    <filterContext.Provider value={ { filters } }>
      <form>
        <label htmlFor="name">
          Digite um nome
          <input
            id="name"
            onChange={ onChangeName }
            data-testid="name-filter"
          />
        </label>
      </form>
      { children }
    </filterContext.Provider>
  );
}

Filters.propTypes = {
  children: PropTypes.shape({
    type: PropTypes.func,
  }).isRequired,
};

export default Filters;
