import { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

function useFilters() {
  const value = useContext(StarWarsContext);

  return value;
}

export default useFilters;
