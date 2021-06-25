import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { saveFilter } = useContext(StarWarsContext);
  //   const [filters, setPesquisar] = useState({
  //     filterByName: {
  //       name: '',
  //     },
  //   });

  const handleChange = ({ target: { value } }) => {
    saveFilter(value);
  };
  return (
    <form>
      <label htmlFor="pesquisar">
        Pesquisar:
        <input
          type="text"
          id="pesquisar"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}
export default Filters;
