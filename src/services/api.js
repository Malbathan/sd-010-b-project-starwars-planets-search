const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function getPlanets() {
  const result = await fetch(API_URL);
  return result.json();
}

export default getPlanets;
