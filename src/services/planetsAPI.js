const BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default fetchPlanetsAPI = async () => {
  const result = await fetch(BASE_URL);
  return result.json();
};
