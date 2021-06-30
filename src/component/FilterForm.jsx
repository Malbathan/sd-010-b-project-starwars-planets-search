import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterForm() {
  const { multipleFilters, setMultipleFilters } = useContext(PlanetsContext);

  // const [multipleFilters, setMultipleFilters] = useState([]);

  // const handleChange = ({ target: { name, value } }) => ({ [name]: value });

  // { ...multipleFilters,filterByName:{name:e.target.value}}

  const handleChange = (e) => setMultipleFilters(
    { ...multipleFilters, filterByName: { name: e.target.value } },
  );

  return (
    <form>
      <label htmlFor="nameFilter">
        Planetas por nome
        <input
          data-testid="name-filter"
          id="nameFilter"
          type="text"
          name="name"
          value={ multipleFilters.filterByName.name }
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

export default FilterForm;
