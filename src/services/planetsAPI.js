const BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets';

const fetchPlanetsAPI = async () => {
  const fecthAPI = await fetch(BASE_URL);
  const response = await fecthAPI.json();
  return response;
};

export default fetchPlanetsAPI;
