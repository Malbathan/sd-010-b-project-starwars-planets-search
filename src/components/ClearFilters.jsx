import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

const ClearFilters = () => (
  <StarWarsContext.Consumer>
    {
      (({ clearFilters }) => (
        <button
          data-testid="filter"
          type="button"
          onClick={ () => clearFilters() }
        >
          X
        </button>))
    }
  </StarWarsContext.Consumer>
);

export default ClearFilters;
