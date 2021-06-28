import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

const ClearFilters = () => (
  <StarWarsContext.Consumer>
    {
      (({ clearFilters }) => (
        <div data-testid="filter">
          <button
            type="button"
            onClick={ () => clearFilters() }
          >
            X
          </button>
        </div>
      ))
    }
  </StarWarsContext.Consumer>
);

export default ClearFilters;
