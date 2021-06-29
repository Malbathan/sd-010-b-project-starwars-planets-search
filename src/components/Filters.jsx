import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import TableContext from '../context/contexto';

let list = [
  'population',
  'orbital_period',
  'diameter',
  'rotation',
  'period',
  'surface_water',
];

let choice = {
  column: 'population',
  comparison: 'maior que',
  value: '-1',
};

function filterFunc({ target: { value, name } }) {
  switch (name) {
  case 'column-filter':
    choice = { ...choice, column: value };
    break;
  case 'comparison-filter':
    choice = { ...choice, comparison: value };
    break;
  case 'value':
    choice = { ...choice, value };
    break;

  default:
    break;
  }
}

function filterButton() {
  list = list.filter((item) => item !== choice.column);
}

function Filters() {
  const { setfilterText } = useContext(TableContext);
  return (
    <form>
      {/* {console.log(filterText)} */}
      <label htmlFor="name-filter">
        Filtrar por texto
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ (event) => setfilterText({ filterByName: {
            name: event.target.value.toLowerCase(),
          } }) }
        />
      </label>
      <label htmlFor="column-filter">
        Escolha um filtro
        <select
          name="column-filter"
          data-testid="column-filter"
          onChange={ (target) => { filterFunc(target); } }
        >
          {list.map((opt, i) => <option key={ i } value={ opt }>{opt}</option>)}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        <select
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (target) => { filterFunc(target); } }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ (target) => { filterFunc(target); } }
      />
      <button
        type="button"
        onClick={ () => {
          filterButton();
          setfilterText({ filterByName: [{
            ...choice,
          }] });
        } }
      >
        Pesquisar
      </button>
    </form>
  );
}

// Filters.propTypes = {
//   filterText: PropTypes.string.isRequired,
//   setfilterText: PropTypes.func.isRequired,
// };

export default Filters;
