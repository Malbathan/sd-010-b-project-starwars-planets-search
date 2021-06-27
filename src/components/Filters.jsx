import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import TableContext from '../context/contexto';

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
    </form>
  );
}

// Filters.propTypes = {
//   filterText: PropTypes.string.isRequired,
//   setfilterText: PropTypes.func.isRequired,
// };

export default Filters;
