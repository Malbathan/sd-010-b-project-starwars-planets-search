const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function getPlanets() {
  const result = await fetch(API_URL);
  const response = await result.json();
  return response.results;
}

export default getPlanets;
