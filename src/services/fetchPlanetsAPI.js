export default async function fetchPlanets() {
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const request = await fetch(ENDPOINT);
  const response = await request.json();
  const { results } = response;
  results.forEach((planet) => {
    delete planet.residents;
  });
  return results;
}
