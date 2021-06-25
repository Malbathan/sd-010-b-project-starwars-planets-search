import { setPlanets } from './localStorage';

export default async function requestApi() {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const req = await fetch(endpoint);
  const { results } = await req.json();
  setPlanets(results);
}
