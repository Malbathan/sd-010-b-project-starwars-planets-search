export default async function requestAPI() {
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const results = await fetch(endPoint);
  const planets = await results.json();
  return planets;
}
