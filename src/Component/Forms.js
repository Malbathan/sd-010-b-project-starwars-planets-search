import React from 'react';
import PropTypes from 'prop-types';

const Forms = ({ structure: {
  selectorChoosen,
  setTypeChoosen,
  setCompChoosen,
  setNumberChoosen,
  submitInfo,
  nameSearch,
} }) => (
  <>
    <label htmlFor="searchName">
      Pesquise por Nome
      <input
        id="searchName"
        type="text"
        data-testid="name-filter"
        onChange={ nameSearch }
      />
    </label>
    <label htmlFor="searchType">
      Pesquise por tipo:
      <select
        id="searchType"
        data-testid="column-filter"
        onChange={ ({
          target: { value },
        }) => setTypeChoosen(value) }
      >
        {selectorChoosen.map(
          (select, i) => (
            <option name={ i } key={ select } value={ select }>
              {select}
            </option>),
        )}
      </select>
    </label>
    <label htmlFor="searchNum">
      <select
        id="searchNum"
        data-testid="comparison-filter"
        onChange={
          ({ target: { value } }) => setCompChoosen(value)
        }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={
          ({ target: { value } }) => setNumberChoosen(value)
        }
      />
    </label>
    <button
      type="button"
      data-testid="button-filter"
      onClick={ submitInfo }
    >
      filtro
    </button>
  </>
);

Forms.propTypes = ({
  structure: PropTypes.shape.isRequired,
  selectorChoosen: PropTypes.shape.isRequired,
  setTypeChoosen: PropTypes.func.isRequired,
  setCompChoosen: PropTypes.func.isRequired,
  setNumberChoosen: PropTypes.func.isRequired,
  submitInfo: PropTypes.func.isRequired,
  nameSearch: PropTypes.func.isRequired,
});

export default Forms;
