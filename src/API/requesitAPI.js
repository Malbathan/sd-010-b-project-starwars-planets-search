async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const movies = await response.json();
  return movies;
}

export default fetchPlanets;
