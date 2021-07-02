export default async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results } = response.json();
  return results;
}
