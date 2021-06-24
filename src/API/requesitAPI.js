// async function fetchPlanets() {
//   const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
//   const planets = await response.json();
//   return planets;
// }

async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const movies = await response.json();
  return movies;
}

export default fetchPlanets;

// fetchMoviesJSON().then(movies => {
//   movies; // fetched movies
// });
