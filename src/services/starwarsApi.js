async function fetchPlanets() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
  const data = await fetch(URL);
  const { results } = await data.json();
  results.forEach((result) => delete result.residents);
  return results;
}

export default fetchPlanets;
