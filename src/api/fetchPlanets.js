async function fetchPlanets() {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';
  const result = await fetch(endpoint);
  return result;
}

export default fetchPlanets;
