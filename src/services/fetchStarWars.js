async function fetchPlanetsStarWars() {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const result = await response.json();
    const planets = result.results;
    const filteredPlanets = planets.filter((planet) => delete planet.residents);
    return filteredPlanets;
  } catch (error) {
    throw new Error(error);
  }
}
export default fetchPlanetsStarWars;
