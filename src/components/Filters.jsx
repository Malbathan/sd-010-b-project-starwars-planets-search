import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import TableContext from '../context/contexto';

let list = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function filterButton(col) {
  list = list.filter((item) => item !== col);
}

function Filters() {
  const [column, setColumn] = useState(list[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState();
  const { setfilterText } = useContext(TableContext);
  return (
    <form>
      <label htmlFor="name-filter">
        Filtrar por texto
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ (event) => {
            event.persist();
            setfilterText((oldState) => {
              const test = { filters: {
                ...oldState.filters,
                filterByName: {
                  name: event.target.value.toLowerCase(),
                } } };
              return test;
            });
          } }
        />
      </label>
      <label htmlFor="column-filter">
        Escolha um filtro
        <select
          name="column-filter"
          data-testid="column-filter"
          onChange={ (event) => { setColumn(event.target.value); } }
        >
          {list.map((opt, i) => <option key={ i } value={ opt }>{opt}</option>)}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        <select
          name="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (event) => { setComparison(event.target.value); } }
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
        onChange={ (event) => { setValue(event.target.value); } }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setfilterText((oldState) => {
            const test = { filters: {
              ...oldState.filters,
              filterByNumericValues: [
                ...oldState.filters.filterByNumericValues,
                { column, comparison, value }] } };

            return test;
          });
          filterButton(column);
          setColumn(list[0]);
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
